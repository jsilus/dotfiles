return {
    "folke/which-key.nvim",
    event = "VeryLazy",
    init = function()
        vim.o.timeout = true
        vim.o.timeoutlen = 300
    end,
    config = function()
        local wk = require("which-key")

        wk.register({ ["<leader>"] = {
            b = { name = "buffers" },
            e = { name = "explorer" },
            f = { name = "find file" },
            h = { name = "git" },
            s = { name = "split window" },
            x = { name = "error window" },
        }})


        wk.setup()
    end,
}
