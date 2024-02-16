const mpris = await Service.import('mpris');

const Player = player => Widget.Button({
    className: 'media',
    onClicked: () => player.playPause(),
    child: Widget.Label().hook(player, label => {
        const { trackArtists, trackTitle } = player;
        label.label = `${trackArtists.join(', ')} - ${trackTitle}`;
    }),
});

export default () => Widget.Box({
    vertical: true,
    children: mpris.bind('players').transform(p => p.map(Player)),
})
