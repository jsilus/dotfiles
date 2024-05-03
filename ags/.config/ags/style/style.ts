/* eslint-disable max-len */
import { type Opt } from "lib/option"
import options from "options"
import { bash, dependencies, sh } from "lib/utils"
import wallpaper from "service/wallpaper"

const deps = [
    "font",
    "theme",
    "bar.flatButtons",
    "bar.position",
    "bar.floating",
    "bar.battery.charging",
    "bar.battery.blocks",
]

const {
    themes,
    blur,
    active,
    scheme,
    padding,
    spacing,
    radius,
    shadows,
    widget,
    border,
    background,
} = options.theme

const popoverPaddingMultiplier = 1.6

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const t = (dark: Opt<any> | string, light: Opt<any> | string) => scheme.value === "dark"
    ? `${dark}` : `${light}`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const $ = (name: string, value: string | Opt<any>) => `$${name}: ${value};`

const variables = (active) => [
    $("bg", background.transparency.value ? `transparentize(${active.bg}, ${background.transparency.value / 100})` : active.bg),
    $("fg", active.fg),

    $("primary-bg", active.primary.bg),
    $("primary-fg", active.primary.fg),

    $("error-bg", active.error.bg),
    $("error-fg", active.error.fg),

    $("scheme", scheme),
    $("padding", `${padding}pt`),
    $("spacing", `${spacing}pt`),
    $("radius", `${radius}px`),
    $("transition", `${options.transition}ms`),

    $("shadows", `${shadows}`),

    $("widget-bg", `transparentize(${active.widget}, ${widget.transparency.value / 100})`),

    $("hover-bg", `transparentize(${active.widget}, ${(widget.transparency.value * .9) / 100})`),
    $("hover-fg", `lighten(${active.fg}, 8%)`),

    $("border-width", `${border.width}px`),
    $("border-color", `transparentize(${active.border}, ${border.transparency.value / 100})`),
    $("border", "$border-width solid $border-color"),

    $("active-gradient", `linear-gradient(to right, ${active.primary.bg}, darken(${active.primary.bg}, 4%))`),
    $("shadow-color", t("rgba(0,0,0,.6)", "rgba(0,0,0,.4)")),
    $("text-shadow", t("2pt 2pt 2pt $shadow-color", "none")),

    $("popover-border-color", `transparentize(${active.border}, ${Math.max(((border.transparency.value - 1) / 100), 0)})`),
    $("popover-padding", `$padding * ${popoverPaddingMultiplier}`),
    $("popover-radius", radius.value === 0 ? "0" : "$radius + $popover-padding"),

    $("font-size", `${options.font.size}pt`),
    $("font-name", options.font.name),

    // etc
    $("charging-bg", active.battery.charging),
    $("bar-battery-blocks", options.bar.battery.blocks),
    $("bar-position", options.bar.position),
    $("bar-floating", options.bar.floating),
    $("hyprland-gaps-multiplier", options.hyprland.gaps),
    $("wallpaper", `"${wallpaper.wallpaper}"`),
]

async function resetCss() {
    if (!dependencies("sass", "fd"))
        return

    try {
        const vars = `${TMP}/variables.scss`
        await Utils.writeFile(variables(themes[active][scheme]).join("\n"), vars)

        const fd = await sh(`fd ".scss" ${App.configDir}`)
        const files = fd.split(/\s+/).map(f => `@import '${f}';`)
        const scss = [`@import '${vars}';`, ...files].join("\n")
        const css = await bash`echo "${scss}" | sass --stdin`

        App.applyCss(css, true)
    } catch (error) {
        logError(error)
    }
}

Utils.monitorFile(App.configDir, resetCss)
options.handler(deps, resetCss)
wallpaper.connect("changed", resetCss)
await resetCss()
