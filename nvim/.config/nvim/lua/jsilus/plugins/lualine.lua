return {
    "nvim-lualine/lualine.nvim",
    dependencies = {
        "nvim-tree/nvim-web-devicons"
    },
    config = function()
        local lualine = require("lualine")
        local lazy_status = require("lazy.status")

        lualine.setup({
            options = {
                theme = 'auto',
                component_separators = '|',
                section_separators = { left = '', right = '' },
                disabled_filetypes = {},
            },
            sections = {
                lualine_a = {
                    { 'mode', separator = { left = '' }, right_padding = 2 },
                },
                lualine_b = { 'filename', 'branch' },
                lualine_c = {},
                lualine_x = {
                    {
                        lazy_status.updates,
                        cond = lazy_status.has_updates,
                    },
                },
                lualine_y = { 'filetype', 'progress' },
                lualine_z = {
                    { 'location', separator = { right = '' }, left_padding = 2 },
                },
            },
            inactive_sections = {
                lualine_a = { 'filename' },
                lualine_b = {},
                lualine_c = {},
                lualine_x = {},
                lualine_y = {},
                lualine_z = { 'location' },
            },
            extensions = {
                'nvim-tree',
                'mason',
                'trouble',
                'lazy',
            },
        })

    end
}
