import App from 'resource:///com/github/Aylur/ags/app.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import { getOptions } from './option.js';
import { dependencies } from '../utils.js';

const scss = `${App.configDir}/scss/main.scss`;
const css = `${App.configDir}/style.css`;

const checkFolder = (folder) => Utils.monitorFile(
    folder,
    reloadScss,
);

export const scssWatcher = () => {
    checkFolder(`${App.configDir}/scss`);
    checkFolder(`${App.configDir}/scss/common`);
    checkFolder(`${App.configDir}/scss/widgets`);
}

export async function reloadScss() {
    if (!dependencies(['sassc']))
        return;

    const opts = getOptions();
    const vars = opts.map(opt => {
        if (opt.scss === 'exclude')
            return '';

        const unit = typeof opt.value === 'number' ? opt.unit : '';
        const value = opt.scssFormat ? opt.scssFormat(opt.value) : opt.value;
        return `$${opt.scss}: ${value}${unit};`;
    });

    try {
        const tmp = '/tmp/ags/scss';
        Utils.ensureDirectory(tmp);
        await Utils.writeFile(vars.join('\n'), `${tmp}/options.scss`);
        await Utils.execAsync(`sassc ${App.configDir}/scss/main.scss ${tmp}/style.css`);

        App.resetCss();
        App.applyCss(`${tmp}/style.css`);
    } catch (error) {
        if (error instanceof Error)
            console.error(error.message);

        if (typeof error === 'string')
            console.error(error);
    }
}
