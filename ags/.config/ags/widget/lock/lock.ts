import RegularWindow from "widget/RegularWindow"
import Lock from "service/lock"
import icons from "lib/icons"

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
                        .then(() => Lock.unlock())
                        .catch(e => {
                            self.text = ""
                            self.parent.children[0].label = "Incorrect Password"
                            console.warn(e.message)
                            self.sensitive = true
                        });
                    }
                }).on("realize", (entry) => entry.grab_focus()),
            ]
        })
    ],
})

export const LockWindow = () => RegularWindow({
    name: "lock",
    child: Widget.Box({
        children: [
            Widget.Revealer({
                reveal_child: false,
                transition: "crossfade",
                transition_duration: 500,
                child: Widget.Overlay({
                    child: Widget.Box({
                        class_name: "background",
                        hpack: "fill",
                        vpack: "fill",
                        expand: true,
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
