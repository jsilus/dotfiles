import { opt } from "lib/option"

const themes = {
    catppuccin: {
        display: opt("Catppuccin"),
        icon: opt("󰄛 "),
        dark: {
            red: {
                bg: opt("#f38ba8"),
                fg: opt("#313244"),
            },
            green: {
                bg: opt("#a6e3a1"),
                fg: opt("#313244"),
            },
            yellow: {
                bg: opt("#f9e2af"),
                fg: opt("#313244"),
            },
            blue: {
                bg: opt("#89b4fa"),
                fg: opt("#313244"),
            },
            purple: {
                bg: opt("#cba6f7"),
                fg: opt("#313244"),
            },
            teal: {
                bg: opt("#74c7ec"),
                fg: opt("#313244"),
            },
            orange: {
                bg: opt("#fab387"),
                fg: opt("#313244"),
            },
            bg: opt("#313244"),
            fg: opt("#cdd6f4"),
            widget: opt("#9399b2"),
            border: opt("#bac2de"),
        },
        light: {
            red: {
                bg: opt("#f38ba8"),
                fg: opt("#313244"),
            },
            green: {
                bg: opt("#a6e3a1"),
                fg: opt("#313244"),
            },
            yellow: {
                bg: opt("#f9e2af"),
                fg: opt("#313244"),
            },
            blue: {
                bg: opt("#89b4fa"),
                fg: opt("#313244"),
            },
            purple: {
                bg: opt("#cba6f7"),
                fg: opt("#313244"),
            },
            teal: {
                bg: opt("#74c7ec"),
                fg: opt("#313244"),
            },
            orange: {
                bg: opt("#fab387"),
                fg: opt("#313244"),
            },
            bg: opt("#cdd0da"),
            fg: opt("#4c4f69"),
            widget: opt("#7c7f93"),
            border: opt("#5c5f77"),
        },
    },
    gruvbox: {
        display: opt("Gruvbox"),
        icon: opt(" "),
        dark: {
            red: {
                bg: opt("#cc241d"),
                fg: opt("#ebdbb2"),
            },
            green: {
                bg: opt("#b8bb26"),
                fg: opt("#ebdbb2"),
            },
            yellow: {
                bg: opt("#d79921"),
                fg: opt("#ebdbb2"),
            },
            blue: {
                bg: opt("#458588"),
                fg: opt("#ebdbb2"),
            },
            purple: {
                bg: opt("#b16286"),
                fg: opt("#ebdbb2"),
            },
            teal: {
                bg: opt("#689d6a"),
                fg: opt("#ebdbb2"),
            },
            orange: {
                bg: opt("#d65d0e"),
                fg: opt("#ebdbb2"),
            },
            bg: opt("#282828"),
            fg: opt("#ebdbb2"),
            widget: opt("#504945"),
            border: opt("#d5c4a1"),
        },
        light: {
            red: {
                bg: opt("#9d0006"),
                fg: opt("#fbf1c7"),
            },
            green: {
                bg: opt("#79740e"),
                fg: opt("#fbf1c7"),
            },
            yellow: {
                bg: opt("#b57614"),
                fg: opt("#fbf1c7"),
            },
            blue: {
                bg: opt("#076678"),
                fg: opt("#fbf1c7"),
            },
            purple: {
                bg: opt("#8f3f71"),
                fg: opt("#fbf1c7"),
            },
            teal: {
                bg: opt("#427b58"),
                fg: opt("#fbf1c7"),
            },
            orange: {
                bg: opt("#af30a3"),
                fg: opt("#fbf1c7"),
            },
            bg: opt("#fbf1c7"),
            fg: opt("#3c3836"),
            widget: opt("#d5c4a1"),
            border: opt("#504945"),
        },
    },
    kanagawa: {
        display: opt("Kanagawa"),
        icon: opt("󱪁 "),
        dark: {
            red: {
                bg: opt("#c34043"),
                fg: opt("#1f1f28"),
            },
            green: {
                bg: opt("#76946a"),
                fg: opt("#1f1f28"),
            },
            yellow: {
                bg: opt("#c0a36e"),
                fg: opt("#1f1f28"),
            },
            blue: {
                bg: opt("#7e9cd8"),
                fg: opt("#1f1f28"),
            },
            purple: {
                bg: opt("#957fb8"),
                fg: opt("#1f1f28"),
            },
            teal: {
                bg: opt("#6a9589"),
                fg: opt("#1f1f28"),
            },
            orange: {
                bg: opt("#e98a00"),
                fg: opt("#1f1f28"),
            },
            bg: opt("#1f1f28"),
            fg: opt("#dcd7ba"),
            widget: opt("#9cabca"),
            border: opt("#dcd7ba"),
        },
        light: {
            red: {
                bg: opt("#c84053"),
                fg: opt("#f2ecbc"),
            },
            green: {
                bg: opt("#6f894e"),
                fg: opt("#f2ecbc"),
            },
            yellow: {
                bg: opt("#77713f"),
                fg: opt("#f2ecbc"),
            },
            blue: {
                bg: opt("#4d699b"),
                fg: opt("#f2ecbc"),
            },
            purple: {
                bg: opt("#b35b79"),
                fg: opt("#f2ecbc"),
            },
            teal: {
                bg: opt("#597b75"),
                fg: opt("#f2ecbc"),
            },
            orange: {
                bg: opt("#e98a00"),
                fg: opt("#f2ecbc"),
            },
            bg: opt("#f2ecbc"),
            fg: opt("#545464"),
            widget: opt("#2a2a37"),
            border: opt("#545464"),
        },
    },
    nord: {
        display: opt("Nord"),
        icon: opt(" "),
        dark: {
            red: {
                bg: opt("#bf616a"),
                fg: opt("#2e3440"),
            },
            green: {
                bg: opt("#a3be8c"),
                fg: opt("#2e3440"),
            },
            yellow: {
                bg: opt("#ebcb8b"),
                fg: opt("#2e3440"),
            },
            blue: {
                bg: opt("#81a1c1"),
                fg: opt("#2e3440"),
            },
            purple: {
                bg: opt("#b48ead"),
                fg: opt("#2e3440"),
            },
            teal: {
                bg: opt("#88c0d0"),
                fg: opt("#2e3440"),
            },
            orange: {
                bg: opt("#d08770"),
                fg: opt("#2e3440"),
            },
            bg: opt("#2e3440"),
            fg: opt("#d8dee9"),
            widget: opt("#4c566a"),
            border: opt("#d8dee9"),
        },
        light: {
            red: {
                bg: opt("#bf616a"),
                fg: opt("#2e3440"),
            },
            green: {
                bg: opt("#a3be8c"),
                fg: opt("#2e3440"),
            },
            yellow: {
                bg: opt("#ebcb8b"),
                fg: opt("#2e3440"),
            },
            blue: {
                bg: opt("#81a1c1"),
                fg: opt("#2e3440"),
            },
            purple: {
                bg: opt("#b48ead"),
                fg: opt("#2e3440"),
            },
            teal: {
                bg: opt("#88c0d0"),
                fg: opt("#2e3440"),
            },
            orange: {
                bg: opt("#d08770"),
                fg: opt("#2e3440"),
            },
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
        },
    },
}

export default themes
