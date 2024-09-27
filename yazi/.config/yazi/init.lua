local function execute_command(command)
    local tmpfile = '/tmp/lua_execute_tmp_file'
    local exit = os.execute(command .. ' > ' .. tmpfile .. ' 2> ' .. tmpfile .. '.err')

    local stdout_file = io.open(tmpfile)
    local stdout = stdout_file and stdout_file:read("*all") or ""

    local stderr_file = io.open(tmpfile .. '.err')
    local stderr = stderr_file and stderr_file:read("*all") or ""

    stdout_file:close()
    stderr_file:close()

    return exit, stdout, stderr
end

local function statusLink()
	local h = cx.active.current.hovered
	if not h then
		return ui.Span("")
	end

    local linked = ""
    if h.link_to ~= nil then
        linked = " -> " .. tostring(h.link_to)
    end
    return ui.Span(linked)
end

local function statusOwner()
    local h = cx.active.current.hovered
    if h == nil or ya.target_family() ~= "unix" then
        return ui.Line {}
    end

    return ui.Line {
        ui.Span(ya.user_name(h.cha.uid) or tostring(h.cha.uid)):fg("magenta"),
        ui.Span(":"),
        ui.Span(ya.group_name(h.cha.gid) or tostring(h.cha.gid)):fg("magenta"),
        ui.Span(" "),
    }
end

Status:children_add(statusLink, 4000, Status.LEFT)
Status:children_add(statusOwner, 500, Status.RIGHT)

function Linemode:tags()
    local status, tags, _ = execute_command("taggy view " .. tostring(self._file.url))


    if (status == 0) then
        tags = ""
    end

    -- local max_length = self._rect.w - string.len(tostring(self._file.name)) - 20
    -- if (max_length < 12) then
    --     max_length = 12
    -- end
    -- if (string.len(tags) > max_length) then
    --     local substr = string.sub(tags, 1, max_length - 3)
    --     tags = substr .. "...\n"
    -- end

    return ui.Line(tags)
end


-- function Linemode:size()
-- 	local size = self._file:size()
--     local count = self._file.cha.is_dir and #self._folder.files or nil
-- 	return ui.Line(size and ya.readable_size(size) or count and count or "")
-- end

function Entity:icon()
    local icon = self._file:icon()

	if not icon then
		return ui.Line("")
    end

    local text = icon.text
    if tostring(self._file.url) == os.getenv("HOME") then
        text = "󰋜"
    end

	if self._file:is_hovered() then
		return ui.Line(" " .. text .. " ")
	else
		return ui.Line(" " .. text .. " "):style(icon.style)
	end
end
