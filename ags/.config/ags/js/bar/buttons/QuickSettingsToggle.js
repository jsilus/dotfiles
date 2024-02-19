export default () => Widget.Button({
    className: 'quicksettingstoggle',
    onPrimaryClick: () => App.toggleWindow('quicksettings'),
    setup: self => self
        .hook(App, (_, win, visible) => {
            self.toggleClassName('active', win === 'quicksettings' && visible);
        }),
    child: Widget.Label({
        label: 'Quick Settings',
    }),
});
