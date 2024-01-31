import Hyprland from 'resource:///com/github/Aylur/ags/service/hyprland.js';
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js';

const dispatch = ws => () => execAsync(`hyprctl dispatch workspace ${ws}`);
const onSameMonitor = (workspaces, monitor) => workspaces.filter(ws => ws.monitorID === monitor && ws.id > 0 && ws.id <= 10);

const WorkspaceItem = ws => Widget.Button({
    onClicked: dispatch(ws),
    child: Widget.Label(`${ws}`),
}).bind('className', Hyprland, 'monitors', ms => ms.find(m => m.activeWorkspace.id === ws) ? 'active' : '');

export default ({monitor} = {monitor : 0}) => Widget.Box({
    className: 'workspaces',
}).bind('children', Hyprland, 'workspaces',
    wss => onSameMonitor(wss, monitor).map(ws => ws.id).sort((a, b) => a - b).map(WorkspaceItem));
