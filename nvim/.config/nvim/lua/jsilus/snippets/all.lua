local function snippet(trigger, desc, expand, opts, cond)
    -- turn trigger into a usable form
    if type(trigger) == "string" then
        trigger = {trig = trigger}
    end
    trigger.dscr = desc

    -- turn expand into a usable form
    if type(expand) == "string" then
        expand = {expand, {}}
    elseif type(expand) == "table" then
        local new_snippet = {expand[1], {}}
        for i = 2, #expand, 1 do
            new_snippet[2][i - 1] = expand[i]
        end
        expand = new_snippet
    end

    -- parse opts
    local condition = nil
    opts = opts or ""
    opts:gsub(".", function(c)
        if c == "r" then
            trigger.trigEngine = "ecma"
        end
    end)
    condition = cond or condition

    return s(trigger, fmta(expand[1], expand[2]), {condition = condition, show_condition = condition})
end

local function autosnippet(trigger, desc, expand, opts, cond)
    -- turn trigger into a usable form
    if type(trigger) == "string" then
        trigger = {trig = trigger}
    end
    trigger.snippetType = "autosnippet"
    return snippet(trigger, desc, expand, opts, cond)
end

local comment_string = function()
    return require("luasnip.util.util").buffer_comment_chars()[1]
end

--------------
-- snippets --
--------------
return {
    snippet("box", "Create a comment box", {
        [[
        <>
        <> <> <>
        <>
        ]],
        f(function(args)
            local cs = comment_string()
            local input_text = args[1][1]
            return string.rep(cs, math.ceil((#input_text + 2 + #cs * 2) / #cs))
        end, 1),
        f(function()
            local cs = comment_string()
            return comment_string()
        end),
        i(1, "comment"),
        f(function()
            local cs = comment_string()
            return comment_string()
        end),
        f(function(args)
            local cs = comment_string()
            local input_text = args[1][1]
            return string.rep(cs, math.ceil((#input_text + 2 + #cs * 2) / #cs))
        end, 1),
    })
}
