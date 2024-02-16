require("nvim-tree").setup({
    disable_netrw = false,
    hijack_netrw = true,
})

vim.keymap.set('n', '<leader>ft', '<Cmd>NvimTreeToggle<CR>')
