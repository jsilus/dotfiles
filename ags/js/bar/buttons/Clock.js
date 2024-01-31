import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import Variable from 'resource:///com/github/Aylur/ags/variable.js';

const date = Variable('', {
    poll: [1000, "date '+%I:%M %p'"],
});

export default () => Widget.Label({
    className: 'clock',
}).bind('label', date);
