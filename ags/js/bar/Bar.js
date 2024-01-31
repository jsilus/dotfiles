// importing
import Widget from 'resource:///com/github/Aylur/ags/widget.js';

import Workspaces from './buttons/Workspaces.js';
import FocusedClient from './buttons/FocusedClient.js';
import Clock from './buttons/Clock.js';
import SysTray from './buttons/SysTray.js';
import Notification from './buttons/Notification.js';
import QuickSettingsToggle from './buttons/QuickSettingsToggle.js';

const Left = (monitor) => Widget.Box({
    children: [
        Workspaces({monitor: monitor}),
        FocusedClient(),
    ],
});

const Center = () => Widget.Box({
    children: [
        Clock(),
        Notification(),
    ],
});

const Right = () => Widget.Box({
    hpack: 'end',
    children: [
        SysTray(),
        QuickSettingsToggle(),
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
