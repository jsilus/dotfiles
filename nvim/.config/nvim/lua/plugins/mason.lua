return {
    "mason-org/mason-lspconfig.nvim",
    opts = {},
    event = { "BufReadPre", "BufNewFile" },
    dependencies = {
        { "mason-org/mason.nvim", opts = {}, cmd = "Mason", },
        "neovim/nvim-lspconfig",
    },
}
