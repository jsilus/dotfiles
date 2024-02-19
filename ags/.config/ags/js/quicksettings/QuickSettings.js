import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import PopupWindow from '../misc/PopupWindow.js';
import Network from './widgets/Network.js';
import Brightness from './widgets/Brightness.js';
import Media from './widgets/Media.js';
import options from '../options.js';

export default () => PopupWindow({
    name: 'quicksettings',
    setup: self => self.hook(options.bar.position, () => {
        self.anchor = ['right', options.bar.position.value];
        if (options.bar.position.value === 'top')
            self.transition = 'slide_down';

        if (options.bar.position.value === 'bottom')
            self.transition = 'slide_up';
    }),
    child: Widget.Box({
        vertical: true,
        children: [
            Network(),
            Brightness(),
            Media(),
        ],
    }),
});
