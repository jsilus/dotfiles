_G.map = function(mode, lhs, rhs, desc)
    vim.keymap.set(mode, lhs, rhs, { noremap = true, silent = true, desc = desc })
end

vim.g.mapleader = " "
vim.g.maplocalleader = " "

map("i", "jj", "<Esc>")

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

-- tabs
map("n", "<leader>t<CR>", ":tabnew<CR>", "Create a new tab")
map("n", "<leader>tc", ":tabclose<CR>", "Close active tab")
map("n", "<leader>tn", ":tabnext<CR>", "Next tab")
map("n", "<leader>tN", ":+tabmove<CR>", "Move tab to the right")
map("n", "<leader>tp", ":tabprev<CR>", "Previous tab")
map("n", "<leader>tP", ":-tabmove<CR>", "Move tab to the left")
map("n", "<leader>t1", ":tabnext1<CR>", "Go to tab 1")
map("n", "<leader>t2", ":tabnext2<CR>", "Go to tab 2")
map("n", "<leader>t3", ":tabnext3<CR>", "Go to tab 3")
map("n", "<leader>t4", ":tabnext4<CR>", "Go to tab 4")
map("n", "<leader>t5", ":tabnext5<CR>", "Go to tab 5")
map("n", "<leader>t6", ":tabnext6<CR>", "Go to tab 6")
map("n", "<leader>t7", ":tabnext7<CR>", "Go to tab 7")
map("n", "<leader>t8", ":tabnext8<CR>", "Go to tab 8")
map("n", "<leader>t9", ":tabnext9<CR>", "Go to tab 9")
