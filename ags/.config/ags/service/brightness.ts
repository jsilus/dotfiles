import { bash, dependencies, sh } from "lib/utils"

const get = (args: string) => Number(Utils.exec(`brightnessctl ${args}`))
const screen = await bash`ls -w1 /sys/class/backlight | head -1`

class Brightness extends Service {
    static {
        Service.register(this, {}, {
            "screen": ["float", "rw"],
            "available": ["bool", "r"],
        })
    }

    #available = dependencies("brightnessctl")
    #screenMax = 1
    #screen = 1

    get screen() { return this.#screen }
    get available() { return this.#available }

    set screen(percent) {
        if (percent < 0)
            percent = 0

        if (percent > 1)
            percent = 1

        sh(`brightnessctl set ${Math.floor(percent * 100)}% -q`).then(() => {
            this.#screen = percent
            this.changed("screen")
        })
    }

    constructor() {
        super()

        const screenPath = `/sys/class/backlight/${screen}/brightness`

        if (this.#available) {
            Utils.monitorFile(screenPath, async f => {
                const v = await Utils.readFileAsync(f)
                this.#screen = Number(v) / this.#screenMax
                this.changed("screen")
            })
            this.#screenMax = get("max")
            this.#screen = get("get") / get("max")
        } else {
            console.warn("not using brightness slider")
        }
    }
}

export default new Brightness
