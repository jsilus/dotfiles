import { Menu, ArrowToggleButton, opened } from "../ToggleButton"
import icons from "lib/icons"
import options from "options"

const {
    themes,
    active,
} = options.theme

export const ThemeToggle = () => ArrowToggleButton({
    name: "theme",
    icon: active.bind().as(n => themes[n].icon.value),
    label: active.bind().as(n => themes[n].display.value),
    connection: [opened, () => opened.value === "theme"],
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
