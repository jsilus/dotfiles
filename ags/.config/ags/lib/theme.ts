import options from "options"
import { zsh, sh } from "lib/utils"

const kitty = {
    catppuccin: {
        light: "Catppuccin-Latte",
        dark: "Catppuccin-Mocha",
    },
    gruvbox: {
        light: "Gruvbox Light",
        dark: "Gruvbox Dark",
    },
    kanagawa: {
        light: "Kanagawa_light",
        dark: "Kanagawa",
    },
    nord: {
        light: "Nord",
        dark: "Nord",
    },
}

function theme() {
    const theme = options.theme.active.value
    const scheme = options.theme.scheme.value

    sh(`kitty kitten themes --reload-in=all ${kitty[theme][scheme]}`)
    zsh(`source $HOME/.config/zsh/zshrc && fast-theme XDG:${theme}-${scheme}`)
    zsh(`source $HOME/.config/zsh/zshrc && theme ${theme} ${scheme}`)
}

export default function init() {
    options.theme.active.connect("changed", theme)
    options.theme.scheme.connect("changed", theme)
    theme()
}
