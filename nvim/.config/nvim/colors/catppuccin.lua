local palette = {
    fg0 = '#cdd6f4',
    fg1 = '#a6adc8',
    bg0 = 'NONE',
    bg1 = '#313244',
    black = '#11111b',
    white = '#cdd6f4',
    red = '#f38ba8',
    orange = '#fab387',
    yellow = '#f9e2af',
    green = '#a6e3a1',
    cyan = '#89dceb',
    blue = '#89b4fa',
    purple = '#cba6f7',
}

vim.opt.background = 'dark'
vim.g.colors_name = 'catppuccin'
require('colorscheme').setup(palette)
