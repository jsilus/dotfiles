import * as Button from './buttons/index.js';

const Left = (monitor) => Widget.Box({
    children: [
        Button.Workspaces({monitor: monitor}),
        Button.FocusedClient(),
    ],
});

const Center = () => Widget.Box({
    children: [
        Button.Clock(),
        Button.Notification(),
    ],
});

const Right = () => Widget.Box({
    hpack: 'end',
    children: [
        Button.SysTray(),
        Button.Battery(),
        Button.QuickSettingsToggle(),
    ],
});

export default ({ monitor } = { monitor: 0 }) => Widget.Window({
    name: `bar-${monitor}`,
    className: 'bar',
    monitor,
    anchor: ['top', 'left', 'right'],
    exclusivity: 'exclusive',
    child: Widget.CenterBox({
        startWidget: Left(monitor),
        centerWidget: Center(),
        endWidget: Right(),
    }),
})
