local cmp = {}

function _G.__statusline_component(name)
    return cmp[name]()
end

local function highlight(group, text)
    return string.format('%%#%s#%s%%*', group, text)
end

function cmp.get_current_mode()
    local modes = {
        ['n']       = { text = 'NORMAL', color = 'StatuslineNormal' },
        ['i']       = { text = 'INSERT', color = 'StatuslineInsert' },
        ['v']       = { text = 'VISUAL', color = 'StatuslineVisual' },
        ['V']       = { text = 'VISUAL-LINE', color = 'StatuslineVisual' },
        ['\022']    = { text = 'VISUAL-BLOCK', color = 'StatuslineVisual' },
        ['R']       = { text = 'REPLACE', color = 'StatuslineReplace' },
        ['c']       = { text = 'COMMAND', color = 'StatuslineCommand' },
        ['t']       = { text = 'TERMINAL', color = 'StatuslineTerminal' },
        ['nt']      = { text = 'TERMINAL', color = 'StatuslineTerminal' },
    }
    local current_mode = modes[vim.api.nvim_get_mode().mode] or { text = 'UNKNOWN', color = '' }
    return highlight(current_mode.color, string.format(' %s ', current_mode.text))
end

local statusline = {
    '%{%v:lua.__statusline_component("get_current_mode")%}',
    ' %t',
    '%r',
    '%m',
    '%=',
    '%{&filetype}',
    ' %2p%%',
    ' %3l:%-2c '
}

vim.o.statusline = table.concat(statusline, '')

require('colorscheme').add_groups(function(C)
    return {
      StatuslineNormal = { fg = C.black, bg = C.blue, },
      StatuslineInsert = { fg = C.black, bg = C.green, },
      StatuslineVisual = { fg = C.black, bg = C.purple, },
      StatuslineReplace = { fg = C.black, bg = C.red, },
      StatuslineCommand = { fg = C.black, bg = C.orange, },
      StatuslineTerminal = { fg = C.black, bg = C.green, },
    }
end)
