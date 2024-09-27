local function split(str)
    t = {}
    for k, v in string.gmatch(str, "(%w+)=(%w+)") do
        t[k] = v
    end
    return t
end

local function addCommand()
    local value, event = ya.input {
        title = "Add tag:",
        position = { "top-center", y = 3, w = 40 },
    }

    if (event == 1) then
        local output = Command("taggy")
            :args {
                "add", value,
            }
            :stderr(Command.PIPED)
            :output()

        if (output.success) then
            ya.notify {
                title = "Tag Added!",
                content = value,
                timeout = 1,
                level = "info",
            }
        else
            ya.notify {
                title = "Failed to add tag!",
                content = output.stderr,
                timeout = 1,
                level = "error",
            }
        end
    end
end

local function tagCommand()
    local file = cx.active.current.hovered
    if not file then return end

    -- local test = Command("notify-send")
    --     :arg("test")
    --     :output()


    ya.dbg("test")

    local w = string.len(file.name) + 12
    local value, event = ya.input {
        title = "Tag file " .. file.name .. ":",
        position = { "hovered", w = w }
    }

    ya.notify {
        title = "Value",
        content = event and tostring(event) or "no event",
        timeout = 1,
    }

    if (event == 1) then
        local output = Command("taggy")
            :args(ya.flat {
                "tag", file,
                split(value),
            })
            :stderr(Command.PIPED)
            :output()

        if (output.success) then
            ya.notify {
                title = "Added tags to file!",
                content = value,
                timeout = 1,
                level = "info",
            }
        else
            ya.notify {
                title = "Failed to add tags to file!",
                content = output.stderr,
                timeout = 1,
                level = "error",
            }
        end
    end
end

local function entry(_, args)
    local command = args[1]

    if (command == "add") then
        addCommand()
    elseif (command == "tag") then
        tagCommand()
    end
end

return { entry = entry }
