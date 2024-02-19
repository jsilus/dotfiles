import Gtk from 'gi://Gtk?version=3.0';
import { subclass, register } from 'resource:///com/github/Aylur/ags/widget.js';
import Label from 'resource:///com/github/Aylur/ags/widgets/label.js';

class FontIcon extends Label {
    static { register(this); }

    constructor(params = '') {
        const { icon = '', ...rest } = params;

        super(typeof params === 'string' ? {} : rest);
        this.toggleClassName('font-icon');

        if (typeof params === 'object')
            this.icon = icon;

        if (typeof params === 'string')
            this.icon = params;
    }

    get icon() { return this.label; }
    set icon(icon) { this.label = icon; }

    get size() {
        return this.get_style_context()
            .get_property('font-size', Gtk.StateFlags.NORMAL);
    }

    vfunc_get_preferred_height() {
        return [this.size, this.size];
    }

    vfunc_get_preferred_width() {
        return [this.size, this.size];
    }
}

export default subclass(FontIcon);
