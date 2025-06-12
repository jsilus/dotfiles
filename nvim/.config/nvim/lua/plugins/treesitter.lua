return {
    "nvim-treesitter/nvim-treesitter",
    event = { "BufReadPre", "BufNewFile" },
    build = ":TSUpdate",
    dependencies = {
        "windwp/nvim-ts-autotag",
    },
    config = function()
        local treesitter = require("nvim-treesitter.configs")
        local parser_config = require("nvim-treesitter.parsers").get_parser_configs()

        treesitter.setup({
            ensure_installed = {
                "lua", "c", "cpp", "rust", "python", "bash"
            },
            ignore_install = {},
            modules = {},
            sync_install = false,
            auto_install = true,
            highlight = {
                enable = true,
            },

        })

        vim.filetype.add({
            pattern = {
                [".*/hypr/.*%.conf"] = "hyprlang",
                [".*%.gitconfig"] = "gitconfig",
            }
        })
    end
}
