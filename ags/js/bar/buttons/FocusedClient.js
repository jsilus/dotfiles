import Hyprland from 'resource:///com/github/Aylur/ags/service/hyprland.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';

export default () => Widget.Label({
    className: 'client-title',
    label: Hyprland.active.client.bind('title'),
});
