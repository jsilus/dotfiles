local palette = {
    fg0 = '#ebdbb2',
    fg1 = '#d5c4a1',
    bg0 = '#282828',
    bg1 = '#504945',
    black = '#1d2021',
    white = '#fbf1c7',
    red = '#fb4934',
    orange = '#fe8019',
    yellow = '#fabd2f',
    green = '#b8bb26',
    cyan = '#8ec07c',
    blue = '#83a598',
    purple = '#d3869b',
}

vim.opt.background = 'dark'
vim.g.colors_name = 'gruvbox'
require('colorscheme').setup(palette)
