import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import PopupWindow from '../misc/PopupWindow.js';
import Network from './widgets/Network.js';
import Media from './widgets/Media.js';

export default () => PopupWindow({
    name: 'quicksettings',
    anchor: ['right', 'top'],
    child: Widget.Box({
        children: [
            Network(),
            Media(),
        ],
        vertical: true,
    }),
});
