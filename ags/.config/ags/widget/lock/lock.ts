import RegularWindow from "widget/RegularWindow"
import Lock from "service/lock"

const LoginBox = () => Widget.Box({
    children: [
        Widget.Overlay({
            hexpand: true,
            vexpand: true,
            child: Widget.Box({
                vertical: true,
                vpack: "center",
                hpack: "center",
                spacing: 16,
                children: [
                    Widget.Box({
                        hpack: "center",
                        class_name: "avatar",
                    }),
                    Widget.Box({
                        class_name: "entry-box",
                        vertical: true,
                        children: [
                            Widget.Label("Enter password:"),
                            Widget.Separator(),
                            Widget.Entry({
                                hpack: "center",
                                xalign: 0.5,
                                visibility: false,
                                placeholder_text: "password",
                                on_accept: self => {
                                    self.sensitive = false;
                                    Utils.authenticate(self.text ?? "")
                                    .then(() => Lock.unlock())
                                    .catch(e => {
                                        self.text = ""
                                        self.parent.children[0].label = e.message
                                        console.warn(e.message)
                                        self.sensitive = true
                                    });
                                }
                            }).on("realize", (entry) => entry.grab_focus()),
                        ]
                    })
                ]
            }),
            overlays: [
            ]
        })
    ]
})

export const LockWindow = () => RegularWindow({
    css: "background-color: transparent;",
    child: Widget.Box({
        children: [
            Widget.Revealer({
                reveal_child: false,
                transition: "crossfade",
                transition_duration: 500,
                child: Widget.Box({
                    class_name: "lock-container",
                    vertical: true,
                    children: [
                        Widget.Overlay({
                            child: LoginBox(),
                            overlays: [
                            ]
                        })
                    ]
                })
            }).on("realize", self => Utils.idle(() => self.reveal_child = true))
        ]
    })
})
