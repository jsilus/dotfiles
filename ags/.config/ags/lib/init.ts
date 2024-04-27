import hyprland from "./hyprland"
import tmux from "./tmux"
import gtk from "./gtk"
import notifications from "./notifications"

export default function init() {
    try {
        gtk()
        tmux()
        notifications()
        hyprland()
    } catch (error) {
        logError(error)
    }
}
