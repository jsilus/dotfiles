import brightness from '../../services/brightness.js';

const slider = Widget.Slider({
    on_change: self => brightness.screen_value = self.value,
    value: brightness.bind('screen-value'),
    className: 'brightness-slider',
});

export default () => slider;
