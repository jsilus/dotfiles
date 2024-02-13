import QuickSettings from './quicksettings/QuickSettings.js';
import Bar from './bar/Bar.js';
import { exec } from 'resource:///com/github/Aylur/ags/utils.js';
import { compileCss, autoReloadCss } from './settings/scss.js';

import { forMonitors } from './utils.js';

const windows = () => [
    forMonitors(Bar),
    QuickSettings(),
];

compileCss();
autoReloadCss();

export default {
    windows: windows().flat(1),
    closeWindowDelay: {
        quicksettings: 200,
    },
};
