-------------------
-- abbreviations --
-------------------
local ls = require("luasnip")
local s = ls.snippet
local sn = ls.snippet_node
local t = ls.text_node
local i = ls.insert_node
local f = ls.function_node
local c = ls.choice_node
local d = ls.dynamic_node
local r = ls.restore_node
local fmta = require("luasnip.extras.fmt").fmta
local rep = require("luasnip.extras").rep

-------------------------------
-- LaTeX specific conditions --
-------------------------------
local tex = {}
tex.in_mathzone = function()
    return vim.fn["vimtex#syntax#in_mathzone"]() == 1
end

tex.in_text = function()
    return not tex.in_mathzone()
end

tex.in_comment = function()
    return vim.fn["vimtex#syntax#in_comment"]() == 1
end

tex.in_env = function(name)
    local is_inside = vim.fn["vimtex#env#is_inside"](name)
    return (is_inside[1] > 0 and is_inside[2] > 0)
end

------------------------------
-- snippet helper functions --
------------------------------
local function snippet(trigger, desc, replacement, opts, cond)
    -- turn trigger into a usable form
    if type(trigger) == "string" then
        trigger = {trig = trigger}
    end
    trigger.dscr = desc

    -- turn expand into a usable form
    if type(replacement) == "string" then
        replacement = {replacement, {}}
    elseif type(replacement) == "table" then
        local new_snippet = {replacement[1], {}}
        for j = 2, #replacement, 1 do
            new_snippet[2][j - 1] = replacement[j]
        end
        replacement = new_snippet
    end

    -- parse opts
    opts = opts or ""
    cond = cond or {}
    opts:gsub(".", function(ch)
        if ch == "m" then
            cond.condition = tex.in_mathzone
            cond.show_condition = tex.in_mathzone
        elseif ch == "t" then
            cond.condition = tex.in_text
            cond.show_condition = tex.in_text
        elseif ch == "r" then
            trigger.trigEngine = "ecma"
        end
    end)

    return s(trigger, fmta(replacement[1], replacement[2]), cond)
end

local function autosnippet(trigger, desc, replacement, opts, cond)
    -- turn trigger into a usable form
    if type(trigger) == "string" then
        trigger = {trig = trigger}
    end
    trigger.snippetType = "autosnippet"
    return snippet(trigger, desc, replacement, opts, cond)
end

local function capture(num)
    return f(function(_, snip)
        return snip.captures[num]
    end)
end

local function get_visual(_, parent)
    if #parent.snippet.env.LS_SELECT_RAW > 0 then
        return sn(nil, i(1, parent.snippet.env.LS_SELECT_RAW))
    else
        return sn(nil, i(1))
    end
end

local function mat(_, snip)
	local rows = tonumber(snip.captures[2])
    local cols = tonumber(snip.captures[3])
	local nodes = {}
	local ins_indx = 1
	for j = 1, rows do
        table.insert(nodes, t({"", ""}))
		table.insert(nodes, r(ins_indx, tostring(j) .. "x1", i(1)))
		ins_indx = ins_indx + 1
		for k = 2, cols do
			table.insert(nodes, t(" & "))
			table.insert(nodes, r(ins_indx, tostring(j) .. "x" .. tostring(k), i(1)))
			ins_indx = ins_indx + 1
		end
		table.insert(nodes, t("\\\\"))
	end
	return sn(nil, nodes)
end

--------------
-- snippets --
--------------
return {
    ----------------------
    -- insert math mode --
    ----------------------
    autosnippet("mm", "Enter inline math mode", {
        [[$<>$]],
        i(1)
    }, "t"),
    autosnippet("dd", "Enter display math mode", {
        [[
        \[
        <>
        \]
        ]],
        i(1)
    }, "t"),

    -------------------
    -- greek letters --
    -------------------
    autosnippet(";a", "Greek alpha", "\\alpha ", "m"),
    autosnippet(";A", "Greek alpha", "\\alpha ", "m"),
    autosnippet(";b", "Greek beta", "\\beta ", "m"),
    autosnippet(";B", "Greek beta", "\\beta ", "m"),
    autosnippet(";c", "Greek chi", "\\chi ", "m"),
    autosnippet(";C", "Greek chi", "\\chi ", "m"),
    autosnippet(";g", "Greek gamma", "\\gamma ", "m"),
    autosnippet(";G", "Greek Gamma", "\\Gamma ", "m"),
    autosnippet(";d", "Greek delta", "\\delta ", "m"),
    autosnippet(";D", "Greek Delta", "\\Delta ", "m"),
    autosnippet(";e", "Greek epsilon", "\\epsilon ", "m"),
    autosnippet(";E", "Greek epsilon", "\\epsilon ", "m"),
    autosnippet(";z", "Greek zeta", "\\zeta ", "m"),
    autosnippet(";Z", "Greek zeta", "\\zeta ", "m"),
    autosnippet(";t", "Greek theta", "\\theta ", "m"),
    autosnippet(";T", "Greek Theta", "\\Theta ", "m"),
    autosnippet(";k", "Greek kappa", "\\kappa ", "m"),
    autosnippet(";K", "Greek kappa", "\\kappa ", "m"),
    autosnippet(";l", "Greek lambda", "\\lambda ", "m"),
    autosnippet(";L", "Greek Lambda", "\\Lambda ", "m"),
    autosnippet(";m", "Greek mu", "\\mu ", "m"),
    autosnippet(";M", "Greek mu", "\\mu ", "m"),
    autosnippet(";r", "Greek rho", "\\rho ", "m"),
    autosnippet(";R", "Greek rho", "\\rho ", "m"),
    autosnippet(";p", "Greek phi", "\\phi ", "m"),
    autosnippet(";P", "Greek Phi", "\\Phi ", "m"),
    autosnippet(":p", "Greek phi", "\\varphi ", "m"),
    autosnippet(":P", "Greek phi", "\\varphi ", "m"),
    autosnippet(";s", "Greek sigma", "\\sigma ", "m"),
    autosnippet(";S", "Greek Sigma", "\\Sigma ", "m"),
    autosnippet(";o", "Greek omega", "\\omega ", "m"),
    autosnippet(";O", "Greek Omega", "\\Omega ", "m"),
    autosnippet(";u", "Greek upsilon", "\\upsilon ", "m"),
    autosnippet(";U", "Greek Upsilon", "\\Upsilon ", "m"),

    ------------------
    -- environments --
    ------------------
    autosnippet("env", "Custom environment", {
        [[
        \begin{<>}
            <>
        \end{<>}
        ]],
        i(1), i(2), rep(1)
    }, "m"),
    autosnippet("([bBpvV])mat(\\d+)x(\\d+)([ar])", "Matrix", {
        [[
        \begin{<><>}<><>
        \end{<><>}
        ]],
        capture(1),
        t("matrix"),
        f(function(_, snip)
            if snip.captures[4] == "a" then
                local out = string.rep("c", tonumber(snip.captures[3]) - 1)
                return "[" .. out .. "|c]"
            end
            return ""
        end),
        d(1, mat),
        capture(1),
        t("matrix"),
    }, "mr"),
    autosnippet("case", "Case Block", {
        [[
        \begin{case}
            <>
        \end{case}
        ]],
        i(1)
    }, "m"),
    autosnippet("align", "Align Block", {
        [[
        \begin{align}
            <>
        \end{align}
        ]],
        i(1)
    }, "m"),

    --------------
    -- fraction --
    --------------
    autosnippet("ff", "Fraction", {
        [[\frac{<>}{<>}]],
        d(1, get_visual), i(2)
    }, "m"),
    autosnippet("((\\d+)|(\\d*)(\\\\)?([A-Za-z]+)((\\^|_)(\\{\\d+\\}|\\d))*)\\/", "Fraction", {
        [[\frac{<>}{<>}]],
        capture(1), i(1)
    }, "mr"),

    -------------------
    -- logic symbols --
    -------------------
    autosnippet("!=", "Not equal", "\\neq", "m"),
    autosnippet(">=", "Greater or equal", "\\geq", "m"),
    autosnippet("<=", "Less or equal", "\\leq", "m"),
    autosnippet(">>", "Much greater", "\\gg", "m"),
    autosnippet("<<", "Much lesser", "\\ll", "m"),
    autosnippet("~=", "Approximately equal", "\\approx", "m"),
    autosnippet("vand", "Logical and", {
        "<>",
        c(1, {
            t("\\wedge"),
            t("\\bigwedge"),
        }),
    }, "m"),
    autosnippet("vorr", "Logical or", {
        "<>",
        c(1, {
            t("\\vee"),
            t("\\bigvee"),
        }),
    }, "m"),

    ------------
    -- arrows --
    ------------
    autosnippet("<-", "Left arrow", "\\leftarrow", "m"),
    autosnippet("\\leftarrow>", "Left/right arrow", "\\leftrightarrow", "m"),
    autosnippet("\\leq=", "Left strong arrow", "\\Leftarrow", "m"),
    autosnippet("\\Leftarrow=", "Implication by", "\\impliedby", "m"),
    autosnippet("\\Leftarrow>", "Left/right strong arrow", "\\Leftrightarrow", "m"),
    autosnippet("\\impliedby>", "If and only if", "\\iff", "m"),
    autosnippet("iff", "If and only if", "\\iff", "m"),
    autosnippet("->", "Right arrow", "\\rightarrow", "m"),
    autosnippet("==>", "Implication", "\\implies", "m"),
    autosnippet("=>", "Right strong arrow", "\\Rightarrow", "m"),
    autosnippet("~>", "Squiggly arrow", "\\leadsto", "m"),

    ----------------
    -- set theory --
    ----------------
    snippet("set", "Set", {
        [[
        \{ <> \}
        ]],
        d(1, get_visual)
    }, "m"),
    autosnippet("eset", "Empty set", "\\emptyset", "m"),
    autosnippet("===", "Equivalent", "\\equiv", "m"),
    autosnippet("inn", "Set in", "\\in", "m"),
    autosnippet("notinn", "Not set in", "\\not\\in", "m"),
    autosnippet("nii", "Set in backwards", "\\ni", "m"),
    autosnippet("notnii", "Not set in backwards", "\\not\\ni", "m"),
    autosnippet("inf", "Infinity", "\\infty", "m"),
    autosnippet("EE", "Exists", "\\exists", "m"),
    autosnippet("AA", "For all", "\\forall", "m"),
    autosnippet("uand", "Set intersection", {
        "<>",
        c(1, {
            t("\\cap"),
            t("\\bigcap"),
        }),
    }, "m"),
    autosnippet("uorr", "Set union", {
        "<>",
        c(1, {
            t("\\cup"),
            t("\\bigcup"),
        }),
    }, "m"),
    autosnippet("CC", "Complex", "\\mathbb{C}", "m"),
    autosnippet("RR", "Real", "\\mathbb{R}", "m"),
    autosnippet("QQ", "Rational", "\\mathbb{Q}", "m"),
    autosnippet("ZZ", "Integer", "\\mathbb{Z}", "m"),
    autosnippet("NN", "Natural", "\\mathbb{N}", "m"),

    ---------------
    -- functions --
    ---------------
    snippet("int", "Integral", {
        [[
        \int<>\,d<>
        ]],
        c(1, {
            sn(nil, {
                t(" "),
                r(1, ""),
            }),
            fmta("_{<>}^{<>} <>", {
                i(2, "-\\infty"),
                i(3, "\\infty"),
                r(1, ""),
            }),
        }),
        i(2, "x"),
    }, "m"),
    snippet("sum", "Summation", {
        [[
        \sum\limits<> <>
        ]],
        c(2, {
            fmta("_{<>}", {
                r(1, "sum_var"),
            }),
            fmta("_{<> = <>}^{<>}", {
                r(1, "sum_var"),
                i(2, "1"),
                i(3, "n"),
            }),
        }),
        d(1, get_visual),
    }, "m", {
        stored = {
            ["sum_var"] = i(1, "i"),
        }
    }),
    snippet("prod", "Product", {
        [[
        \prod\limits<> <>
        ]],
        c(2, {
            fmta("_{<>}", {
                r(1, "prod_var"),
            }),
            fmta("_{<> = <>}^{<>}", {
                r(1, "prod_var"),
                i(2, "1"),
                i(3, "n"),
            }),
        }),
        d(1, get_visual),
    }, "m", {
        stored = {
            ["prod_var"] = i(1, "i"),
        }
    }),
    snippet("lim", "Limit", {
        [[
        \lim\limits_{<> \to <>} <>
        ]],
        i(1, "x"),
        i(2, "\\infty"),
        d(3, get_visual),
    }, "m"),

    ----------
    -- dots --
    ----------
    autosnippet("...", "Dots", "\\dots", "m"),
    autosnippet("c..", "Center dots", "\\cdots", "m"),
    autosnippet("v..", "Vertical dots", "\\vdots", "m"),
    autosnippet("d..", "Diagonal dots", "\\ddots", "m"),

    --------------
    -- brackets --
    --------------
    autosnippet("lrp", "Parenthesis", {
        [[
        \left( <> \right)
        ]],
        d(1, get_visual),
    }, "m"),
    autosnippet("lrb", "Brackets", {
        [[
        \left[ <> \right]
        ]],
        d(1, get_visual),
    }, "m"),
    autosnippet("lrc", "Curly Braces", {
        [[
        \left{ <> \right}
        ]],
        d(1, get_visual),
    }, "m"),
    autosnippet("lra", "Angle Brackets", {
        [[
        \left\langle <> \right\rangle
        ]],
        d(1, get_visual),
    }, "m"),
    autosnippet("lrn", "Norm", {
        [[
        \left\lVert <> \right\rVert
        ]],
        d(1, get_visual),
    }, "m"),
    snippet("norm", "Norm", {
        [[
        \left\lVert <> \right\rVert
        ]],
        d(1, get_visual),
    }, "m"),
    snippet("abs", "Absolute value", {
        [[
        \left\lvert <> \right\rvert
        ]],
        d(1, get_visual),
    }, "m"),
    snippet("ceil", "Ceiling", {
        [[
        \left\lceil <> \right\rceil
        ]],
        d(1, get_visual),
    }, "m"),
    snippet("floor", "floor", {
        [[
        \left\lfloor <> \right\rfloor
        ]],
        d(1, get_visual),
    }, "m"),

    ----------------------------
    -- auto subscript numbers --
    ----------------------------
    autosnippet("([A-Za-z])(_{(\\d+)})?(\\d)", "Auto-subscript", {
        [[<>_{<><>}]],
        capture(1), capture(3), capture(4)
    }, "mr"),
}
