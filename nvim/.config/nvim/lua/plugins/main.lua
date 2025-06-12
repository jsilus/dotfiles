return {
    {
        "norcalli/nvim-colorizer.lua",
        event = { "BufReadPre", "BufNewFile" },
        opts = {},
    },
    {
        "numToStr/Comment.nvim",
        event = { "InsertEnter" },
        opts = {},
    }
}
