import { opt } from "lib/option"

const themes = {
    catppuccin: {
        display: opt("Catppuccin"),
        icon: opt("󰄛 "),
        dark: {
            primary: {
                bg: opt("#74c7ec"),
                fg: opt("#313244"),
            },
            error: {
                bg: opt("#f38ba8"),
                fg: opt("#313244"),
            },
            bg: opt("#313244"),
            fg: opt("#cdd6f4"),
            widget: opt("#9399b2"),
            border: opt("#bac2de"),
            battery: {
                charging: opt("#a6e3a1"),
            },
        },
        light: {
            primary: {
                bg: opt("#209fb5"),
                fg: opt("#cdd0da"),
            },
            error: {
                bg: opt("#d20f39"),
                fg: opt("#cdd0da"),
            },
            bg: opt("#cdd0da"),
            fg: opt("#4c4f69"),
            widget: opt("#7c7f93"),
            border: opt("#5c5f77"),
            battery: {
                charging: opt("#40a02b"),
            },
        },
    },
    gruvbox: {
        display: opt("Gruvbox"),
        icon: opt(" "),
        dark: {
            primary: {
                bg: opt("#458588"),
                fg: opt("#ebdbb2"),
            },
            error: {
                bg: opt("#cc241d"),
                fg: opt("#ebdbb2"),
            },
            bg: opt("#282828"),
            fg: opt("#ebdbb2"),
            widget: opt("#504945"),
            border: opt("#d5c4a1"),
            battery: {
                charging: opt("#b8bb26"),
            },
        },
        light: {
            primary: {
                bg: opt("#458588"),
                fg: opt("#3c3836"),
            },
            error: {
                bg: opt("#cc241d"),
                fg: opt("#3c3836"),
            },
            bg: opt("#fbf1c7"),
            fg: opt("#3c3836"),
            widget: opt("#d5c4a1"),
            border: opt("#504945"),
            battery: {
                charging: opt("#98971a"),
            },
        },
    },
    kanagawa: {
        display: opt("Kanagawa"),
        icon: opt("󱪁 "),
        dark: {
            primary: {
                bg: opt("#6a9589"),
                fg: opt("#1f1f28"),
            },
            error: {
                bg: opt("#c34043"),
                fg: opt("#1f1f28"),
            },
            bg: opt("#1f1f28"),
            fg: opt("#dcd7ba"),
            widget: opt("#9cabca"),
            border: opt("#dcd7ba"),
            battery: {
                charging: opt("#76946a"),
            },
        },
        light: {
            primary: {
                bg: opt("#597b75"),
                fg: opt("#f2ecbc"),
            },
            error: {
                bg: opt("#c84053"),
                fg: opt("#f2ecbc"),
            },
            bg: opt("#f2ecbc"),
            fg: opt("#545464"),
            widget: opt("#2a2a37"),
            border: opt("#545464"),
            battery: {
                charging: opt("#6f894e"),
            },
        },
    },
    nord: {
        display: opt("Nord"),
        icon: opt(" "),
        dark: {
            primary: {
                bg: opt("#8fbcbb"),
                fg: opt("#2e3440"),
            },
            error: {
                bg: opt("#bf616a"),
                fg: opt("#2e3440"),
            },
            bg: opt("#2e3440"),
            fg: opt("#d8dee9"),
            widget: opt("#4c566a"),
            border: opt("#d8dee9"),
            battery: {
                charging: opt("#a3be8c"),
            },
        },
        light: {
            primary: {
                bg: opt("#88c0d0"),
                fg: opt("#2e3440"),
            },
            error: {
                bg: opt("#bf616a"),
                fg: opt("#2e3440"),
            },
            bg: opt("#d8dee9"),
            fg: opt("#2e3440"),
            widget: opt("#4c566a"),
            border: opt("#2e3440"),
            battery: {
                charging: opt("#a3be8c"),
            },
        },
    },
}

export default themes
