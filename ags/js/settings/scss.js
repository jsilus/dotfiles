import App from 'resource:///com/github/Aylur/ags/app.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';

const scss = `${App.configDir}/scss/main.scss`;
const css = `${App.configDir}/style.css`;

export const compileCss = () => {
    Utils.exec(`sassc ${scss} ${css}`);
    App.resetCss();
    App.applyCss(css);
};

const checkFolder = (folder) => Utils.monitorFile(
    folder,
    compileCss,
    'directory',
);

export const autoReloadCss = () => {
    checkFolder(`${App.configDir}/scss`);
    checkFolder(`${App.configDir}/scss/common`);
    checkFolder(`${App.configDir}/scss/widgets`);
};
