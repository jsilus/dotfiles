_G.map = function(mode, lhs, rhs, desc)
    vim.keymap.set(mode, lhs, rhs, { noremap = true, silent = true, desc = desc })
end

vim.g.mapleader = " "
vim.g.maplocalleader = " "

-- file explorer
map("n", "<leader>ex", vim.cmd.Ex, "Enter Netrw explorer")

-- move block of text
map("v", "J", ":m '>+1<CR>gv=gv", "Move block of text down")
map("v", "K", ":m '<-2<CR>gv=gv", "Move block of text up")
map("v", "<", "<gv", "Deindent block of text")
map("v", ">", ">gv", "Indent block of text")

-- increment/decrement numbers
map("n", "<leader>+", "<C-a>", "Increment a number")
map("n", "<leader>-", "<C-x>", "Decrement a number")

-- create and manage windows
map("n", "<leader>sv", "<C-w>v", "Split window vertically")
map("n", "<leader>sh", "<C-w>s", "Split window horizontally")
map("n", "<leader>sr", "<C-w>=", "Reset window sizes")
map("n", "<leader>sx", "<cmd>close<CR>", "Close window")

-- move between windows
map("n", "<C-h>", "<C-w>h", "Move left window")
map("n", "<C-j>", "<C-w>j", "Move down window")
map("n", "<C-k>", "<C-w>k", "Move up window")
map("n", "<C-l>", "<C-w>l", "Move right window")

-- paste to replace without copying what was taken
map("v", "p", "_dP", "Paste")
