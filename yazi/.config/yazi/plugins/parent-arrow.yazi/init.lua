local function entry(_, args)
    local p = cx.active.parent
    if not p then return end

    local goal = p.files[p.cursor + 1 + args[1]]
    if goal and goal.cha.is_dir then
        ya.manager_emit("cd", { tostring(goal.url) })
    end
end

return { entry = entry }
