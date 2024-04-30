import hyprland from "./hyprland"
import gtk from "./gtk"
import notifications from "./notifications"
import theme from "./theme"

export default function init() {
    try {
        gtk()
        notifications()
        hyprland()
        theme()
    } catch (error) {
        logError(error)
    }
}
