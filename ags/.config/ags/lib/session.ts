import GLib from "gi://GLib?version=2.0"

declare global {
    const OPTIONS: string
    const TMP: string
    const USER: string
}

Object.assign(globalThis, {
    TMP: `${GLib.get_tmp_dir()}/ags`,
    OPTIONS: `${GLib.get_user_cache_dir()}/ags/options.json`,
    USER: GLib.get_user_name(),
})

Utils.ensureDirectory(TMP)
App.addIcons(`${App.configDir}/assets`)
