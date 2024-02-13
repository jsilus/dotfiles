const battery = await Service.import('battery');

export default () => Widget.Box({
    children: [
        Widget.Label({
            label: battery.bind('percent').transform(p => `${p}%`),
        }),
        Widget.Icon({
            icon: battery.bind('icon_name'),
        }),
    ],
    vertical: false,
    visible: battery.bind('available'),
    class_name: battery.bind('charging').transform(ch => ch ? 'charging' : ''),
})
