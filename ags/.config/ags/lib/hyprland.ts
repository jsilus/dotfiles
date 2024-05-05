import options from "options"
const { messageAsync } = await Service.import("hyprland")

const {
    hyprland,
    theme: {
        themes,
        spacing,
        radius,
        border: { width },
        blur,
        shadows,
        active,
        scheme,
        primary,
    },
} = options

const deps = [
    "hyprland",
    "theme.spacing",
    "theme.radius",
    "theme.blur",
    "theme.width",
    "theme.shadows",
    "theme.themes",
    "theme.scheme",
    "theme.active",
    "theme.primary",
]

function sendBatch(batch: string[]) {
    const cmd = batch
        .filter(x => !!x)
        .map(x => `keyword ${x}`)
        .join("; ")

    return messageAsync(`[[BATCH]]/${cmd}`)
}

async function setupHyprland() {
    const wm_gaps = Math.floor(hyprland.gaps.value * spacing.value)

    sendBatch([
        `general:border_size ${width}`,
        `general:gaps_out ${wm_gaps}`,
        `general:gaps_in ${Math.floor(wm_gaps / 2)}`,
        `general:col.active_border rgba(${themes[active][scheme][primary].bg.value.replace("#", "")}ff)`,
        `general:col.inactive_border rgba(${hyprland.inactiveBorder.value})`,
        `decoration:rounding ${radius}`,
        `decoration:drop_shadow ${shadows.value ? "yes" : "no"}`,
        `dwindle:no_gaps_when_only ${hyprland.gapsWhenOnly.value ? 0 : 1}`,
        `master:no_gaps_when_only ${hyprland.gapsWhenOnly.value ? 0 : 1}`,
    ])

    await sendBatch(App.windows.map(({ name }) => `layerrule unset, ${name}`))

    if (blur.value > 0) {
        sendBatch(App.windows.flatMap(({ name }) => [
            `layerrule unset, ${name}`,
            `layerrule blur, ${name}`,
            `layerrule ignorealpha ${/* based on shadow color */.29}, ${name}`,
        ]))
    }
}

export default function init() {
    options.handler(deps, setupHyprland)
    setupHyprland()
}
