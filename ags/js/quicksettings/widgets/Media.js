import Mpris from 'resource:///com/github/Aylur/ags/service/mpris.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';

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
}).bind('children', Mpris, 'players', p => p.map(Player))
