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

const fast_zsh_syntax_highlighting = {
    catppuccin: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
    },
}

function theme() {
    const theme = options.theme.active.value
    const scheme = options.theme.scheme.value

    sh(`kitty kitten themes --reload-in=all ${kitty[theme][scheme]}`)
    zsh(`source \$XDG_CONFIG_HOME/zsh/.zshrc && fast-theme XDG:${fast_zsh_syntax_highlighting[theme][scheme]}`)
}

export default function init() {
    options.theme.active.connect("changed", theme)
    options.theme.scheme.connect("changed", theme)
    theme()
}
