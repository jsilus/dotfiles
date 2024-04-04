import QuickSettings from './quicksettings/QuickSettings.js';
import Bar from './bar/Bar.js';
import { init } from './settings/setup.js';
import { exec } from 'resource:///com/github/Aylur/ags/utils.js';
import options from './options.js';

import { forMonitors } from './utils.js';

const windows = () => [
    forMonitors(Bar),
    QuickSettings(),
];

export default {
    onConfigParsed: init,
    windows: windows().flat(1),
    closeWindowDelay: {
        quicksettings: options.transition.value,
    },
};
