local mocha = require("catppuccin.palettes").get_palette "mocha"
local bufferline = require('bufferline')
bufferline.setup {
    options = {
        mode = "buffer",
        themable = true,
        indicator = {
            style = 'none',
        },
        diagnostics = "nvim_lsp",
        always_show_bufferline = false,
        separator_style = { ' ', ' ' },
        offsets = {
            {
                filetype = "NvimTree",
                text = "File Explorer",
                text_align = "left",
                separator = true,
            },
        },
    },
    highlights = require("catppuccin.groups.integrations.bufferline").get {

        styles = { "italic", "bold" },
        custom = {
            all = {
                fill = {
                    fg = mocha.blue,
                    bg = "NONE",
                },
                background = {
                    fg = mocha.blue,
                    bg = "NONE",
                },
                close_button = {
                    fg = mocha.blue,
                    bg = "NONE",
                },
                close_button_visible = {
                    fg = mocha.base,
                    bg = mocha.blue,
                },
                close_button_selected = {
                    fg = mocha.base,
                    bg = mocha.blue,
                },
                buffer_visible = {
                    fg = mocha.base,
                    bg = mocha.blue,
                },
                buffer_selected = {
                    fg = mocha.base,
                    bg = mocha.blue,
                },
                separator = {
                    fg = "NONE",
                    bg = "NONE",
                },
                separator_selected = {
                    fg = "NONE",
                    bg = "NONE",
                },
                offset_separator = {
                    fg = mocha.surface1,
                    bg = "NONE",
                },
                indicator_visible = {
                    fg = mocha.blue,
                    bg = mocha.blue
                },
                indicator_selected = {
                    fg = mocha.blue,
                    bg = mocha.blue
                },
            },
        },
    },
}

local opts = {noremap = true, silent = true}

vim.keymap.set('n', '<C-1>', '<Cmd>BufferLineGoToBuffer 1<CR>', opts)
vim.keymap.set('n', '<C-2>', '<Cmd>BufferLineGoToBuffer 2<CR>', opts)
vim.keymap.set('n', '<C-3>', '<Cmd>BufferLineGoToBuffer 3<CR>', opts)
vim.keymap.set('n', '<C-4>', '<Cmd>BufferLineGoToBuffer 4<CR>', opts)
vim.keymap.set('n', '<C-5>', '<Cmd>BufferLineGoToBuffer 5<CR>', opts)
vim.keymap.set('n', '<C-6>', '<Cmd>BufferLineGoToBuffer 6<CR>', opts)
vim.keymap.set('n', '<C-7>', '<Cmd>BufferLineGoToBuffer 7<CR>', opts)
vim.keymap.set('n', '<C-8>', '<Cmd>BufferLineGoToBuffer 8<CR>', opts)
vim.keymap.set('n', '<C-9>', '<Cmd>BufferLineGoToBuffer 9<CR>', opts)
vim.keymap.set('n', '<C-10>', '<Cmd>BufferLineGoToBuffer 10<CR>', opts)
