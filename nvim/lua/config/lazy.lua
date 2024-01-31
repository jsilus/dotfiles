local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable",
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
    -- colors
    { "catppuccin/nvim", name = "catppuccin", priority = 1000 },

    "nvim-treesitter/nvim-treesitter",
    "luckasRanarison/tree-sitter-hypr",
    "Fymyte/rasi.vim",

    "norcalli/nvim-colorizer.lua",


    -- LSP
    {
        'VonHeikemen/lsp-zero.nvim',
        branch = 'v2.x',
        dependencies = {
            -- LSP Support
            {'neovim/nvim-lspconfig'},
            {'williamboman/mason.nvim'},
            {'williamboman/mason-lspconfig.nvim'},

            -- Autocompletion
            {'hrsh7th/nvim-cmp'},
            {'hrsh7th/cmp-nvim-lsp'},
            {'L3MON4D3/LuaSnip'},
        }
    },

    -- utility
    { "numToStr/Comment.nvim", lazy = false, opts = {} },
    { "nvim-tree/nvim-tree.lua", dependencies = { "nvim-tree/nvim-web-devicons" } },
    { "mcauley-penney/tidy.nvim", config = true },


    -- UI
    { "nvim-lualine/lualine.nvim", dependencies = { "nvim-tree/nvim-web-devicons" } },
    { "akinsho/bufferline.nvim", version = "*", dependencies = 'nvim-tree/nvim-web-devicons' },
    { "lewis6991/gitsigns.nvim", opts = {} },
    {
        "folke/which-key.nvim",
        event = "VeryLazy",
        init = function()
            vim.o.timeout = true
            vim.o.timeoutlen = 300
        end,
        opts = {}
    },
})
