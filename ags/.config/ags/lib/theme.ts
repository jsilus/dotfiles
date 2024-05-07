import options from "options"
import { zsh, sh } from "lib/utils"

function theme() {
    const theme = options.theme.active.value
    const scheme = options.theme.scheme.value

    zsh(`$HOME/.local/bin/theme ${theme}-${scheme}`)
}

export default function init() {
    options.theme.active.connect("changed", theme)
    options.theme.scheme.connect("changed", theme)
    theme()
}
