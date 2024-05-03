import Gdk from "gi://Gdk?version=3.0"
import { dependencies } from "lib/utils"
import { LockWindow } from "widget/lock/lock"

let GtkLock = null

class Lock extends Service {
    static {
        Service.register(this, {}, {
            "locked": ["bool", "r"],
            "available": ["bool", "r"],
        })
    }

    #available = false
    get available() { return this.#available }

    #locked = false
    get locked() { return this.#locked }

    #lock = null
    #windows = []

    reset_lock() {
        this.#locked = false
        while (this.#windows.length > 0)
            this.#windows.pop()
        Gdk.Display.get_default()?.sync()
    }

    handle_finished() {
        this.#lock.destroy()
        this.reset_lock()
    }

    unlock() {
        if (!this.#locked)
            return
        console.log("Unlocking...")
        this.#windows.forEach(w => w.window.child.children[0].reveal_child = false)
        Utils.timeout(500, () => {
            this.#lock.unlock_and_destroy()
            this.reset_lock()
        })
    }

    #newWindow(monitor) {
        const window = LockWindow()
        const win = {window, monitor}
        this.#windows.push(win)
        return win
    }

    lock() {
        if (!this.#available || this.#locked)
            return
        this.#locked = true

        this.#lock = GtkLock.prepare_lock()
        this.#lock.connect("locked", on_locked)
        this.#lock.connect("finished", on_finished)

        const display = Gdk.Display.get_default()
        // go backwards to get main monitor focused
        for (let m = display?.get_n_monitors() - 1;  m >= 0;  m--) {
            const monitor = display?.get_monitor(m)
            this.#newWindow(monitor)
        }

        // create new windows on display connect
        display?.connect("monitor-added", (_, monitor) => {
            const w = this.#newWindow(monitor)
            this.#lock.new_surface(w.window, w.monitor)
            if (this.#locked)
                w.window.show()
        })

        this.#lock.lock_lock()
        this.#windows.map(w => {
            this.#lock.new_surface(w.window, w.monitor)
            w.window.show()
        })
    }

    // safely load GtkLock so that this file can be imported without it
    async #setup() {
        try {
            const {
                default: gtkLock,
            } = await import("gi://GtkSessionLock")
            GtkLock = gtkLock

            this.#available = GtkLock.is_supported()
            if (!this.#available) {
                console.warn("ext-session-lock-v1 not supported")
            }
        } catch (e) {
            console.warn("GtkSessionLock not found")
        }
    }

    constructor() {
        super()
        this.#setup()
    }
}

function on_locked() {
    console.log("Your session is now locked")
}

function on_finished() {
    console.error("Finished event received. Session could not be locked.")
    lock.handle_finished()
}

const lock = new Lock
Object.assign(globalThis, { lock })
export default lock
