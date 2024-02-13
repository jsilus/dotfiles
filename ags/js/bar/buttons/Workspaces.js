const hyprland = await Service.import('hyprland');

const dispatch = ws => hyprland.sendMessage(`dispatch workspace ${ws}`);

export default ({monitor} = {monitor : 0}) => Widget.Box({
    className: 'workspaces',
    children: Array.from({ length: 10 }, (_, i) => i + 1).map(i => Widget.Button({
        attribute: i,
        label: `${i}`,
        onClicked: () => dispatch(i),
    })),

    setup: self => self
        .hook(hyprland, () => self.children.forEach(btn => {
            btn.visible = hyprland.workspaces.some(ws => ws.id === btn.attribute && ws.monitorID === monitor);
        }))
        .hook(hyprland.active.workspace, () => self.children.forEach(btn => {
            btn.className = hyprland.active.workspace.id === btn.attribute ? 'active' : '';
        }))
})
