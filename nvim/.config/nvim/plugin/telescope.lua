vim.pack.add({ 'https://github.com/nvim-lua/plenary.nvim' })
vim.pack.add({ 'https://github.com/nvim-telescope/telescope.nvim' })

local builtin = require('telescope.builtin')
map('n', '<leader>ff', builtin.find_files, 'Telescope find files')
map('n', '<leader>fg', builtin.live_grep, 'Telescope live grep')
map('n', '<leader>fb', builtin.buffers, 'Telescope buffers')
map('n', '<leader>fh', builtin.help_tags, 'Telescope help tags')
