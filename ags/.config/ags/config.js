import App from 'resource:///com/github/Aylur/ags/app.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';

const v = {
    ags: `v${pkg.version}`,
    expected: 'v1.7.7',
};

function mismatch() {
    print(`config expects ${v.expected}, but ags is ${v.ags}`);
    App.connect('config-parsed', app => app.Quit());
    return {};
}

export default v.ags === v.expected
    ? (await import('./js/main.js')).default
    : mismatch();
