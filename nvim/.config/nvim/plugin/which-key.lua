vim.pack.add({ 'https://github.com/folke/which-key.nvim' })
require('which-key').setup({
    preset = 'helix',
    notify = true,
    spec = {
        { '<leader>t', group = 'tabs' },
        { '<leader>g', group = 'git' },
    },
})
