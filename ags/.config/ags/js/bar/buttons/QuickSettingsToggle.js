import App from 'resource:///com/github/Aylur/ags/app.js';

export default () => Widget.Button({
    className: 'quicksettingstoggle',
    onPrimaryClick: () => App.toggleWindow('quicksettings'),
    setup: self => self
        .hook(App, (_, win, visible) => {
            if (win === 'quicksettings')
                self.toggleClassName('active', visible);
        }, 'window-toggled'),
    child: Widget.Label({
        label: 'Menu',
        setup: self => self
            .hook(App, (_, win, visible) => {
                if (win === 'quicksettings')
                    self.label = `quicksettings is ${visible ? 'visible' : 'not visible'}`
            }, 'window-toggled'),
    }),
});
