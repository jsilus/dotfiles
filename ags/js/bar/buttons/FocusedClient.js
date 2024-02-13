const hyprland = await Service.import('hyprland');

export default () => Widget.Label({
    className: 'client-title',

    setup: self => self
        .hook(hyprland.active.client, () => self.label = hyprland.active.client.title),
});
