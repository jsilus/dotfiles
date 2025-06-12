return {
    "folke/which-key.nvim",
    event = "VeryLazy",
    opts = {
        preset = "helix",
        notify = true,
        spec = {
            { "<leader>b", group = "buffers" },
            { "<leader>e", group = "explorer" },
            { "<leader>f", group = "find file" },
            { "<leader>g", group = "git" },
            { "<leader>s", group = "split window" },
            { "<leader>x", group = "error window" },
        },
    },
}
