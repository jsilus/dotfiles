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
