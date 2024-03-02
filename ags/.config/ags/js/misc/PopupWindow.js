import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Window from 'resource:///com/github/Aylur/ags/widgets/window.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import GObject from 'gi://GObject';
import options from '../options.js';

// const keyGrabber = Widget.Window({
//     name: 'key-grabber',
//     popup: true,
//     anchor: ['top', 'left', 'right', 'bottom'],
//     css: 'background-color: transparent;',
//     visible: false,
//     exclusivity: 'ignore',
//     keymode: 'on-demand',
//     layer: 'top',
//     attribute: { list: [] },
//     setup: self => self.on('notify::visible', ({ visible }) => {
//         if (!visible)
//             self.attribute?.list.forEach(name => App.closeWindow(name));
//     }),
//     child: Widget.EventBox({ vexpand: true }).on('button-press-event', () => {
//         App.closeWindow('key-grabber');
//         keyGrabber.attribute?.list.forEach(name => App.closeWindow(name));
//     }),
// });
//
// App.addWindow(keyGrabber);

const PopupRevealer = (name, child, transition) => Widget.Box({
    child: Widget.Revealer({
        transition,
        child,
        transitionDuration: options.transition.bind(),
        setup: self => self
            .hook(App, (_, wname, visible) => {
                if (wname === name) {
                    self.reveal_child = visible;
                    print()
                    print(`open: ${self.reveal_child}`)
                }
            }, 'window-toggled'),
    }),
});

class PopupWindow extends Window {
    static { GObject.registerClass(this); }

    constructor({ name, child, transition = 'none', visible = false, ...rest }) {
        super({
            ...rest,
            name,
            popup: true,
            keymode: 'exclusive',
            layer: 'overlay',
            class_names: ['popup-window', name],
        });

        child.toggleClassName('window-content');

        this.child = PopupRevealer(name, child, transition);

        this.show_all();
        this.visible = visible;

        // keyGrabber.bind('visible', this, 'visible');
        // keyGrabber.attribute?.list.push(name);
    };
};

export default config => new PopupWindow(config);
