_G.map = function(mode, lhs, rhs, desc)
    vim.keymap.set(mode, lhs, rhs, { noremap = true, silent = true, desc = desc })
end

vim.g.mapleader = ' '
vim.g.maplocalleader = ' '

map('n', '<leader>ex', vim.cmd.Ex, 'Enter Netrw explorer')

-- move visual block up and down
map('v', 'J', ":m '>+1<CR>gv=gv", 'Move block of text down')
map('v', 'K', ":m '<-2<CR>gv=gv", 'Move block of text up')

-- stay in visual block after indenting
map('v', '<', '<gv', 'Deindent block of text')
map('v', '>', '>gv', 'Indent block of text')

-- yank and put to system clipboard
map('n', ',p', '"+p', 'Put from system clipboard')
map('n', ',y', '"+y', 'Yank to system clipboard')
map('v', ',y', '"+y', 'Yank to system clipboard')

-- source current file
map('n', '<leader>s', ':source %<CR>', 'Source current file')

-- tabs
map('n', '<leader>t<CR>', '<Cmd>tabnew<CR>', 'Open new tab')
map('n', '<leader>tc', '<Cmd>tabclose<CR>', 'Close active tab')
map('n', '<leader>tn', '<Cmd>tabnext<CR>', 'Go to next tab')
map('n', '<leader>tN', '<Cmd>+tabmove<CR>', 'Move tab to the right')
map('n', '<leader>tp', '<Cmd>tabprev<CR>', 'Go to previous tab')
map('n', '<leader>tP', '<Cmd>-tabmove<CR>', 'Move tab to the left')

map('n', '<leader>t1', '<Cmd>tabnext1<CR>', 'Go to tab 1')
map('n', '<leader>t2', '<Cmd>tabnext2<CR>', 'Go to tab 2')
map('n', '<leader>t3', '<Cmd>tabnext3<CR>', 'Go to tab 3')
map('n', '<leader>t4', '<Cmd>tabnext4<CR>', 'Go to tab 4')
map('n', '<leader>t5', '<Cmd>tabnext5<CR>', 'Go to tab 5')
map('n', '<leader>t6', '<Cmd>tabnext6<CR>', 'Go to tab 6')
map('n', '<leader>t7', '<Cmd>tabnext7<CR>', 'Go to tab 7')
map('n', '<leader>t8', '<Cmd>tabnext8<CR>', 'Go to tab 8')
map('n', '<leader>t9', '<Cmd>tabnext9<CR>', 'Go to tab 9')
