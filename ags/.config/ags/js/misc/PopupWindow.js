import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Window from 'resource:///com/github/Aylur/ags/widgets/window.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import GObject from 'gi://GObject';

const keyGrabber = Widget.Window({
    name: 'key-grabber',
    popup: true,
    anchor: ['top', 'left', 'right', 'bottom'],
    css: 'background-color: transparent;',
    visible: false,
    exclusivity: 'ignore',
    keymode: 'on-demand',
    layer: 'top',
    attribute: { list: [] },
    setup: self => self.on('notify::visible', ({ visible }) => {
        if (!visible)
            self.attribute?.list.forEach(name => App.closeWindow(name));
    }),
    child: Widget.EventBox({ vexpand: true }).on('button-press-event', () => {
        App.closeWindow('key-grabber');
        keyGrabber.attribute?.list.forEach(name => App.closeWindow(name));
    }),
});

App.addWindow(keyGrabber);

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
        this.revealer = Widget.Revealer({
            transition,
            child,
            transitionDuration: 200,
            reveal_child: visible,
            setup: self => self
                .hook(App, (_, wname, visible) => {
                    if (wname === name)
                        this.revealer.reveal_child = visible;
                }),
        });

        this.child = Widget.Box({
            child: this.revealer,
        });

        this.show_all();
        this.visible = visible;

        keyGrabber.bind('visible', this, 'visible');
        keyGrabber.attribute?.list.push(name);
    };

    set transition(dir) { this.revealer.transition = dir; }
    get transition() { return this.revealer.transition; }

};

export default config => new PopupWindow(config);
