export default () => Widget.Button({
    className: 'quicksettingstoggle',
    onPrimaryClick: () => App.toggleWindow('quicksettings'),
    child: Widget.Label({
        label: 'Quick Settings',
    }),
});
