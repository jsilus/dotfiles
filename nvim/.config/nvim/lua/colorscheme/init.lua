local M = {}

local initialized = false
local function init()
    require('colorscheme.groups.base')
    require('colorscheme.groups.syntax')
    require('colorscheme.groups.treesitter')
    require('colorscheme.groups.lsp')
    initialized = true
end

local active_palette = {}
local group_funcs = {}

local function apply_groups(group_func, palette)
    for group, setting in pairs(group_func(palette)) do
        vim.api.nvim_set_hl(0, group, setting)
    end
end

function M.add_groups(group_func)
    -- if not initialized then init() end
    -- FIXME: find way to ensure groups contained within ./groups are loaded before others

    table.insert(group_funcs, group_func)
    if active_palette ~= nil then
        apply_groups(group_func, active_palette)
    end
end


function M.setup(palette)
    if not initialized then init() end

    for _, group_func in ipairs(group_funcs) do
        apply_groups(group_func, palette)
    end
    active_palette = palette
end

return M
