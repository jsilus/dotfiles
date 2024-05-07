import { Menu, ArrowToggleButton, DoubleArrowToggleButton, opened } from "../ToggleButton"
import icons from "lib/icons"
import options from "options"

const {
    themes,
    active,
    primary,
} = options.theme

const colors = ["red", "green", "yellow", "blue", "purple", "teal", "orange"]

export const ThemeToggle = () => DoubleArrowToggleButton({
    name: "theme",
    other: "primarycolor",
    icon: active.bind().as(n => themes[n].icon.value),
    label: active.bind().as(n => themes[n].display.value),
    connection: [opened, () => opened.value === "theme" || opened.value === "primarycolor"],
    deactivate: () => {},
    activate: () => opened.setValue("theme"),
    activateOnArrow: false,
    stringIcon: true,
})

export const ThemeSelection = () => Menu({
    name: "theme",
    icon: icons.ui.themes,
    title: "Theme Selection",
    content: [
        Widget.Box({
            vertical: true,
            children: Object.keys(themes).map(key => {
                const obj = themes[key]
                return Widget.Button({
                    class_name: active.bind().as(a => a == key ? "active" : ""),
                    on_clicked: () => options.theme.active.value = key,
                    child: Widget.Box({
                        children: [
                            Widget.Label({
                                class_name: "icon",
                                label: obj.icon.value
                            }),
                            Widget.Label(obj.display.value),
                        ]
                    })
                })
            }),
        }),
    ],
})

export const PrimaryColorSelection = () => Menu({
    name: "primarycolor",
    icon: icons.ui.themes,
    title: "Primary Color Selection",
    content: [
        Widget.Box({
            vertical: true,
            children: colors.map(color => {
                return Widget.Button({
                    class_name: primary.bind().as(p => p == color ? "active" : ""),
                    on_clicked: () => primary.value = color,
                    child: Widget.Box({
                        children: [
                            Widget.Label(color),
                        ]
                    })
                })
            }),
        }),
    ],
})
