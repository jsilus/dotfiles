return {
    "akinsho/bufferline.nvim",
    version = "*",
    dependencies = {
        'nvim-tree/nvim-web-devicons',
        'catppuccin'
    },
    config = function()
        local mocha = require("catppuccin.palettes").get_palette "mocha"
        local bufferline = require('bufferline')
        bufferline.setup {
            options = {
                mode = "buffers",
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

        local function map(mode, lhs, rhs, desc)
            vim.keymap.set(mode, lhs, rhs, { noremap = true, silent = true, desc = desc })
        end

        -- jump to buffer
        map("n", "<leader>b1", "<Cmd>BufferLineGoToBuffer 1<CR>", "Go to buffer 1")
        map("n", "<leader>b2", "<Cmd>BufferLineGoToBuffer 2<CR>", "Go to buffer 2")
        map("n", "<leader>b3", "<Cmd>BufferLineGoToBuffer 3<CR>", "Go to buffer 3")
        map("n", "<leader>b4", "<Cmd>BufferLineGoToBuffer 4<CR>", "Go to buffer 4")
        map("n", "<leader>b5", "<Cmd>BufferLineGoToBuffer 5<CR>", "Go to buffer 5")
        map("n", "<leader>b6", "<Cmd>BufferLineGoToBuffer 6<CR>", "Go to buffer 6")
        map("n", "<leader>b7", "<Cmd>BufferLineGoToBuffer 7<CR>", "Go to buffer 7")
        map("n", "<leader>b8", "<Cmd>BufferLineGoToBuffer 8<CR>", "Go to buffer 8")
        map("n", "<leader>b9", "<Cmd>BufferLineGoToBuffer 9<CR>", "Go to buffer 9")
        map("n", "<leader>b$", "<Cmd>BufferLineGoToBuffer -1<CR>", "Go to last buffer")

        map("n", "[b", "<Cmd>BufferLineCycleNext<CR>", "Go to next buffer")
        map("n", "]b", "<Cmd>BufferLineCyclePrev<CR>", "Go to previous buffer")
        map("n", "<leader>b>", "<Cmd>BufferLineMoveNext<CR>", "Move buffer right")
        map("n", "<leader>b<", "<Cmd>BufferLineMovePrev<CR>", "Move buffer left")

        -- close current buffer
        map("n", "<leader>bx", "<Cmd>bd<CR>", "Close active buffer")

    end
}
