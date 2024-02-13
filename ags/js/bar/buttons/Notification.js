const notifications = await Service.import('notifications');

export default () => Widget.Box({
    className: 'notification',
    children: [
        Widget.Icon({
            icon: 'preferences-system-notifications-symbolic',
            visible: notifications.bind('popups').transform(ps => ps.length > 0),
        }),
        Widget.Label({
            label: notifications.bind('popups').transform(ps => ps[0]?.summary || '')
        })
    ],
});
