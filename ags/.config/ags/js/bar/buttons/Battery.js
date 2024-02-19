import FontIcon from '../../misc/FontIcon.js';
import icons from '../../icons.js';
import options from '../../options.js';
import PanelButton from '../PanelButton.js';

const battery = await Service.import('battery');

const Indicator = () => Widget.Stack({
    children: {
        false: Widget.Icon({ icon: battery.bind('icon_name') }),
        true: FontIcon(icons.battery.charging),
    },
    visible: options.battery.bar.show_icon.bind('value'),
    setup: self => self.hook(battery, () => {
        self.shown = `${battery.charging || battery.charged}`;
    }),
});

const PercentLabel = () => Widget.Revealer({
    transition: 'slide_right',
    reveal_child: options.battery.show_percentage.bind('value'),
    child: Widget.Label({
        label: battery.bind('percent').transform(p => `${p}%`),
    }),
});

const LevelBar = () => Widget.LevelBar({
    value: battery.bind('percent').transform(p => p / 100),
    setup: self => self.hook(options.battery.bar.full, () => {
        const full = options.battery.bar.full.value;
        self.vpack = full ? 'fill' : 'center';
        self.hpack = full ? 'fill' : 'center';
    }),
});

const WholeButton = () => Widget.Overlay({
    class_name: 'whole-button',
    child: LevelBar(),
    pass_through: true,
    overlays: [Widget.Box({
        hpack: 'center',
        children: [
            FontIcon({
                icon: icons.battery.charging,
                visible: battery.bind('charging'),
            }),
            Widget.Box({
                hpack: 'center',
                vpack: 'center',
                child: PercentLabel(),
            }),
        ],
    })],
});

export default () => PanelButton({
    class_name: 'battery-bar',
    on_clicked: () => {
        const v = options.battery.show_percentage.value;
        options.battery.show_percentage.value = !v;
    },
    content: Widget.Box({
        visible: battery.bind('available'),
        children: options.battery.bar.full.bind('value').transform(full => full
            ? [WholeButton()] : [
                Indicator(),
                PercentLabel(),
                LevelBar(),
            ]),
        setup: self => self.hook(battery, w => {
            w.toggleClassName('charging', battery.charging || battery.charged);
            w.toggleClassName('medium', battery.percent < options.battery.medium.value);
            w.toggleClassName('low', battery.percent < options.battery.low.value);
            w.toggleClassName('half', battery.percent < 48);
        }),
    }),
});
