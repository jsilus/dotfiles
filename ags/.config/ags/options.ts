import { opt, mkOptions } from "lib/option"
import { distro } from "lib/variables"
import { icon } from "lib/utils"
import icons from "lib/icons"

const options = mkOptions(OPTIONS, {
    autotheme: opt(false),

    wallpaper: {
        resolution: opt<import("service/wallpaper").Resolution>(1920),
        market: opt<import("service/wallpaper").Market>("random"),
    },

    theme: {
        themes: {
            active: opt<"catppuccin">("catppuccin"),
            catppuccin: {
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
        },

        blur: opt(0),
        scheme: opt<"dark" | "light">("dark"),
        widget: { opacity: opt(90) },
        border: {
            width: opt(1),
            opacity: opt(89),
        },

        shadows: opt(true),
        padding: opt(7),
        spacing: opt(12),
        radius: opt(11),
    },

    transition: opt(200),

    font: {
        size: opt(12),
        name: opt("Mononoki Nerd Font"),
    },

    bar: {
        flatButtons: opt(false),
        position: opt<"top" | "bottom">("top"),
        corners: opt(false),
        layout: {
            start: opt<Array<import("widget/bar/Bar").BarWidget>>([
                "launcher",
                "workspaces",
                "taskbar",
                "expander",
                "messages",
            ]),
            center: opt<Array<import("widget/bar/Bar").BarWidget>>([
                "date",
            ]),
            end: opt<Array<import("widget/bar/Bar").BarWidget>>([
                "media",
                "expander",
                "systray",
                "colorpicker",
                "screenrecord",
                "battery",
                "system",
                "powermenu",
            ]),
        },
        launcher: {
            icon: {
                colored: opt(true),
                icon: opt(icon(distro.logo, icons.ui.search)),
            },
            label: {
                colored: opt(false),
                label: opt(""),
            },
            action: opt(() => App.toggleWindow("launcher")),
        },
        date: {
            format: opt("%I:%M %p - %A %e"),
            action: opt(() => App.toggleWindow("datemenu")),
        },
        battery: {
            bar: opt<"hidden" | "regular" | "whole">("whole"),
            percentage: opt(true),
            blocks: opt(7),
            width: opt(50),
            low: opt(30),
        },
        workspaces: {
            workspaces: opt(9),
        },
        taskbar: {
            iconSize: opt(0),
            monochrome: opt(false),
            exclusive: opt(true),
        },
        messages: {
            action: opt(() => App.toggleWindow("datemenu")),
        },
        systray: {
            ignore: opt([
                "KDE Connect Indicator",
                "spotify-client",
            ]),
        },
        media: {
            monochrome: opt(true),
            preferred: opt("spotify"),
            direction: opt<"left" | "right">("right"),
            format: opt("{artists} - {title}"),
            length: opt(40),
        },
        powermenu: {
            monochrome: opt(false),
            action: opt(() => App.toggleWindow("powermenu")),
        },
    },

    launcher: {
        width: opt(0),
        margin: opt(80),
        sh: {
            max: opt(16),
        },
        apps: {
            iconSize: opt(62),
            max: opt(10),
            favorites: opt([
                [
                    "firefox",
                    "thunderbird",
                    "steam",
                    "obsidian",
                    "discord",
                ],
            ]),
        },
    },

    overview: {
        scale: opt(9),
        workspaces: opt(9),
        monochromeIcon: opt(false),
    },

    powermenu: {
        sleep: opt("systemctl suspend"),
        reboot: opt("systemctl reboot"),
        logout: opt("pkill Hyprland"),
        shutdown: opt("shutdown now"),
        layout: opt<"line" | "box">("line"),
        labels: opt(true),
    },

    quicksettings: {
        avatar: {
            image: opt(`/var/lib/AccountsService/icons/${Utils.USER}`),
            size: opt(70),
        },
        width: opt(380),
        position: opt<"left" | "center" | "right">("right"),
        networkSettings: opt("nm-connection-editor"),
        media: {
            monochromeIcon: opt(true),
            coverSize: opt(100),
        },
    },

    datemenu: {
        position: opt<"left" | "center" | "right">("center"),
        weather: {
            interval: opt(60_000),
            unit: opt<"metric" | "imperial" | "standard">("metric"),
            key: opt<string>(
                JSON.parse(Utils.readFile(`${App.configDir}/.weather`) || "{}")?.key || "",
            ),
            cities: opt<Array<number>>(
                JSON.parse(Utils.readFile(`${App.configDir}/.weather`) || "{}")?.cities || [],
            ),
        },
    },

    osd: {
        progress: {
            vertical: opt(true),
            pack: {
                h: opt<"start" | "center" | "end">("end"),
                v: opt<"start" | "center" | "end">("center"),
            },
        },
        microphone: {
            pack: {
                h: opt<"start" | "center" | "end">("center"),
                v: opt<"start" | "center" | "end">("end"),
            },
        },
    },

    notifications: {
        position: opt<Array<"top" | "bottom" | "left" | "right">>(["top", "right"]),
        blacklist: opt(["Spotify"]),
        width: opt(440),
    },

    hyprland: {
        gaps: opt(2.4),
        inactiveBorder: opt("333333ff"),
        gapsWhenOnly: opt(true),
    },
})

globalThis["options"] = options
export default options
