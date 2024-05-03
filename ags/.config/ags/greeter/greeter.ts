import "./session"
import "style/style"
import GLib from "gi://GLib?version=2.0"
import RegularWindow from "widget/RegularWindow"
import statusbar from "./statusbar"
import auth from "./auth"
import Lock from "gi://GtkSessionLock";

const LockWindow = () => new RegularWindow({
    name: "greeter",
    setup: self => {
        self.set_default_size(500, 500)
        self.show_all()
        auth.attribute.password.grab_focus()
    },
    child: Widget.Overlay({
        child: Widget.Box({ expand: true }),
        overlays: [
            Widget.Box({
                vpack: "start",
                hpack: "fill",
                hexpand: true,
                child: statusbar,
            }),
            Widget.Box({
                vpack: "center",
                hpack: "center",
                child: auth,
            }),
        ],
    }),
})

const lock = lock.prepare_lock()
const windows = []

const unlock = () => {
    windows.forEach(w => w.child.children[0].reveal_child = false)

    Utils.timeout(500, () => {
        lock.unlock_and_destroy()
        windows.forEach(w => w.destroy())
    })
}


const createWindow = monitor => {
    const win = LockWindow()
    windows.push(win)
    lock.new_surface(win, monitor)
    win.show
}

App.config({
    icons: "./assets",
    windows: [win],
    cursorTheme: GLib.getenv("XCURSOR_THEME")!,
})
