local function entry(_, _)
    local sort_by = tostring(cx.active.conf.sort_by)
    local sort_reverse = tostring(cx.active.conf.sort_reverse)

    local setenv = require("posix.stdlib").setenv

    if (sort_by == "natural") then
        setenv("MPV_SORT", "natural")
    elseif (sort_by == "size") then
        setenv("MPV_SORT", "size")
    elseif (sort_by == "modified") then
        setenv("MPV_SORT", "time")
    end
    setenv("MPV_REVERSE", sort_reverse)
end

return {
    entry = entry,
}
