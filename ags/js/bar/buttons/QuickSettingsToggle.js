import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import App from 'resource:///com/github/Aylur/ags/app.js';

export default () => Widget.Button({
    className: 'quicksettingstoggle',
    onPrimaryClick: () => App.toggleWindow('quicksettings'),
    child: Widget.Label({
        label: 'Quick Settings',
    }),
});
