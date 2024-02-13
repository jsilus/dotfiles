import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Window from 'resource:///com/github/Aylur/ags/widgets/window.js';
import App from 'resource:///com/github/Aylur/ags/app.js';
import GObject from 'gi://GObject';


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

    };

    set transition(dir) { this.revealer.transition = dir; }
    get transition() { return this.revealer.transition; }

};

export default config => new PopupWindow(config);
