import Notifications from 'resource:///com/github/Aylur/ags/service/notifications.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';

export default () => Widget.Box({
    className: 'notification',
    children: [
        Widget.Icon({
            icon: 'preferences-system-notifications-symbolic',
        }).bind('visible', Notifications, 'popups', ps => ps.length > 0),
        Widget.Label().bind('label', Notifications, 'popups', ps => ps[0]?.summary || ''),
    ],
});
