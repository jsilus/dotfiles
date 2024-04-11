local tex = {}
tex.in_mathzone = function()
    return vim.fn["vimtex#syntax#in_mathzone"]() == 1
end

tex.in_text = function()
    return not tex.in_mathzone()
end

local function snip(trigger, opts, snippet, cond)

    -- turn snippet into a usable form
    if type(snippet) == "string" then
        snippet = {snippet, {}}
    elseif type(snippet) == "table" then
        local new_snippet = {snippet[1], {}}
        for i = 2, #snippet, 1 do
            new_snippet[2][i - 1] = snippet[i]
        end
        snippet = new_snippet
    end

    -- parse opts
    local snippetType = "snippet"
    local condition = nil
    opts:gsub(".", function(c)
        if c == "a" then
            snippetType = "autosnippet"
        elseif c == "m" then
            condition = tex.in_mathzone
        elseif c == "t" then
            condition = tex.in_text
        end
    end)
    condition = condition or cond or nil

    s({trig = trigger, snippetType = snippetType}, fmta(snippet[1], snippet[2]), {condition = condition})
end

return {
    -- insert math mode
    snip("mk", "at", {[[$<>$]], i(1)}),
    snip("dm", "at", {[[
    \[
    <>
    \]
    ]],
    i(1) }),

    -- greek letters
    snip(";a", "am", "\\alpha "),
    snip(";A", "am", "\\alpha "),
    snip(";b", "am", "\\beta "),
    snip(";B", "am", "\\beta "),
    snip(";c", "am", "\\chi "),
    snip(";C", "am", "\\chi "),
    snip(";g", "am", "\\gamma "),
    snip(";G", "am", "\\Gamma "),
    snip(";d", "am", "\\delta "),
    snip(";D", "am", "\\Delta "),
    snip(";e", "am", "\\epsilon "),
    snip(";E", "am", "\\epsilon "),
    snip(";z", "am", "\\zeta "),
    snip(";Z", "am", "\\zeta "),
    snip(";t", "am", "\\theta "),
    snip(";T", "am", "\\Theta "),
    snip(";k", "am", "\\kappa "),
    snip(";K", "am", "\\kappa "),
    snip(";l", "am", "\\lambda "),
    snip(";L", "am", "\\Lambda "),
    snip(";m", "am", "\\mu "),
    snip(";M", "am", "\\mu "),
    snip(";r", "am", "\\rho "),
    snip(";R", "am", "\\rho "),
    snip(";p", "am", "\\phi "),
    snip(";P", "am", "\\Phi "),
    snip(":p", "am", "\\varphi "),
    snip(":P", "am", "\\varphi "),
    snip(";s", "am", "\\sigma "),
    snip(";S", "am", "\\Sigma "),
    snip(";o", "am", "\\omega "),
    snip(";O", "am", "\\Omega "),
    snip(";u", "am", "\\upsilon "),
    snip(";U", "am", "\\Upsilon "),

    -- environments

}
