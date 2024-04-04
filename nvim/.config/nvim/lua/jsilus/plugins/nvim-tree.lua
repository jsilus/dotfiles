return {
    "nvim-tree/nvim-tree.lua",
    dependencies = {
        "nvim-tree/nvim-web-devicons",
    },
    config = function()
        local nvimtree = require("nvim-tree")

         nvimtree.setup({
             disable_netrw = false,
             hijack_netrw = true,
         })

         local key = vim.keymap

         key.set("n", "<leader>ee", "<Cmd>NvimTreeToggle<CR>", { desc = "Toggle file explorer" })
         key.set("n", "<leader>ef", "<Cmd>NvimTreeFindFileToggle<CR>", { desc = "Toggle file explorer on current file" })
         key.set("n", "<leader>ec", "<Cmd>NvimTreeCollapse<CR>", { desc = "Collapse file explorer" })
         key.set("n", "<leader>er", "<Cmd>NvimTreeRefresh<CR>", { desc = "Refresh file explorer" })

    end
}
