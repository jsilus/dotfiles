return {
    "folke/which-key.nvim",
    event = "VeryLazy",
    init = function()
        vim.o.timeout = true
        vim.o.timeoutlen = 300
    end,
    config = function()
        local wk = require("which-key")

        wk.add({
            { "<leader>b", group = "buffers" },
            { "<leader>e", group = "explorer" },
            { "<leader>f", group = "find file" },
            { "<leader>g", group = "git" },
            { "<leader>s", group = "split window" },
            { "<leader>x", group = "error window" },
        })


        wk.setup()
    end,
}
