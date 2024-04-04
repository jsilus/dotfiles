return {
    "nvim-tree/nvim-tree.lua",
    dependencies = {
        "nvim-tree/nvim-web-devicons",
    },
    config = function()
        local nvimtree = require("nvim-tree")

         nvimtree.setup({
             view = {
                width = 35,
                relativenumber = true,
                number = true,
             },
             renderer = {
                 indent_markers = {
                     enable = true,
                 },
                 icons = {
                     glyphs = {
                         folder = {
                             arrow_closed = "", -- arrow when folder is closed
                             arrow_open = "", -- arrow when folder is open
                         },
                     },
                 },
             },
             actions = {
                 open_file = {
                     window_picker = {
                         enable = false,
                     },
                 },
             },
             disable_netrw = false,
             hijack_netrw = true,
         })

         map("n", "<leader>ee", "<Cmd>NvimTreeToggle<CR>", "Toggle file explorer")
         map("n", "<leader>ef", "<Cmd>NvimTreeFindFileToggle<CR>", "Toggle file explorer on current file")
         map("n", "<leader>ec", "<Cmd>NvimTreeCollapse<CR>", "Collapse file explorer")
         map("n", "<leader>er", "<Cmd>NvimTreeRefresh<CR>", "Refresh file explorer")

    end
}
