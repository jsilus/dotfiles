const systemtray = await Service.import('systemtray');

const SysTrayItem = item => Widget.Button({
    child: Widget.Icon().bind('icon', item, 'icon'),
    tooltipMarkup: item.bind('tooltip-markup'),
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (_, event) => item.openMenu(event),
});

export default () => Widget.Box({
    className: 'tray',
    children: systemtray.bind('items').transform(i => i.map(SysTrayItem)),
})
