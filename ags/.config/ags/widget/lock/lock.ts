import RegularWindow from "widget/RegularWindow"
import lock from "service/lock"
import icons from "lib/icons"
import { getMonitorName } from "lib/utils"

const SCREENSHOT_PATH = "/tmp/lockscreen-screenshot"
export const TRANSITION_TIME = 750

const LockBox = () => Widget.Box({
    class_name: "lock-box",
    vertical: true,
    vpack: "center",
    hpack: "center",
    spacing: 16,
    children: [
        Widget.Icon({
            class_name: "lock-icon",
            hpack: "center",
            icon: icons.ui.lock,
        }),
        Widget.Box({
            vertical: true,
            spacing: 5,
            children: [
                Widget.Label(""),
                Widget.Separator(),
                Widget.Entry({
                    hpack: "center",
                    xalign: 0.5,
                    visibility: false,
                    placeholder_text: "Password",
                    on_accept: self => {
                        self.sensitive = false;
                        Utils.authenticate(self.text ?? "")
                        .then(() => lock.unlock())
                        .catch(e => {
                            self.text = ""
                            self.parent.children[0].label = "Incorrect Password"
                            console.warn(e.message)
                            self.sensitive = true
                            self.grab_focus()
                        });
                    }
                }).on("realize", (entry) => entry.grab_focus()),
            ]
        })
    ],
})

export const LockWindow = (monitor) => RegularWindow({
    name: "lock",
    child: Widget.Box({
        children: [
            Widget.Revealer({
                reveal_child: false,
                transition: "crossfade",
                transition_duration: TRANSITION_TIME,
                child: Widget.Overlay({
                    child: Widget.Box({
                        hpack: "fill",
                        vpack: "fill",
                        expand: true,
                        setup: self => {
                            takeBlurredScreenshot(monitor).then(screenshotPath => {
                                self.css = `background-image: url("${screenshotPath}");`
                            }).catch(e => console.error(e))
                        }
                    }),
                    overlays: [
                        Widget.Box({
                            hpack: "end",
                            vpack: "start",
                            children: [
                            ],
                        }),
                        LockBox(),
                    ],
                })
            }).on("realize", self => Utils.idle(() => self.reveal_child = true)),
        ]
    })
})

const takeBlurredScreenshot = async (monitor): Promise<string> => {
	const monitorName = getMonitorName(monitor)
	const screenshotPath = `${SCREENSHOT_PATH}-${monitorName}`

	// We use PPM because it does not compress the image making grim much
	// faster. Also, scaling the image somewhat improves performance of blurring
	// the image
	Utils.exec(`bash -c "grim -o ${monitorName} -t ppm - | convert - -encoding ppm -scale 10% -blur 0x01 -resize 1000% ${screenshotPath}"`)
	return screenshotPath
}
