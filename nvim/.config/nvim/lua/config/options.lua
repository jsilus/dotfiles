local fn = vim.fn
local opt = vim.opt

-- 4 space tabs
opt.tabstop = 4
opt.softtabstop = 4
opt.shiftwidth = 4
opt.expandtab = true

-- line numbers
opt.number = true
opt.relativenumber = true

-- highlight all search matchs
opt.hlsearch = true
-- show search while typing it out
opt.incsearch = true
-- lowercase search is case insensitive
opt.smartcase = true

-- don't wrap lines
opt.wrap = false

-- highlight line with cursor
opt.cursorline = true

-- disable mode and use custom bar
opt.showmode = false

-- ensure cursor has 10 lines of padding from top and bottom
opt.scrolloff = 10

-- disable tilde on end of buffer
opt.fillchars = { eob = ' ' }

-- confirm on buffer exit
opt.confirm = true

-- don't update screen until macro is completed
opt.lazyredraw = true

-- show hidden whitespace
opt.list = true

if (fn.has('termguicolors')) then
    opt.termguicolors = true
end
