const date = Variable('', {
    poll: [1000, "date '+%I:%M %p'"],
});

export default () => Widget.Label({
    className: 'clock',
    label: date.bind(),
})
