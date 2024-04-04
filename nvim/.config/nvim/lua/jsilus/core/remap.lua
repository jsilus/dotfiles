vim.g.mapleader = " "

local key = vim.keymap

-- file explorer
key.set("n", "<leader>ex", vim.cmd.Ex, { desc = "Enter Netrw explorer" })

-- move block of text
key.set("v", "J", ":m '>+1<CR>gv=gv", { desc = "Move block of text down" })
key.set("v", "K", ":m '<-2<CR>gv=gv", { desc = "Move block of text up" })
key.set("v", "<", "<gv", { desc = "Deindent block of text" })
key.set("v", ">", ">gv", { desc = "Indent block of text" })

-- increment/decrement numbers
key.set("n", "<leader>+", "<C-a>", { desc = "Increment a number" })
key.set("n", "<leader>-", "<C-x>", { desc = "Decrement a number" })

-- create and manage windows
key.set("n", "<leader>sv", "<C-w>v", { desc = "Split window vertically" })
key.set("n", "<leader>sh", "<C-w>s", { desc = "Split window horizontally" })
key.set("n", "<leader>sr", "<C-w>=", { desc = "Reset window sizes" })
key.set("n", "<leader>sx", "<cmd>close<CR>", { desc = "Close window" })

-- move between windows
key.set({ "n", "i" }, "<C-h>", "<C-w>h")
key.set({ "n", "i" }, "<C-j>", "<C-w>j")
key.set({ "n", "i" }, "<C-k>", "<C-w>k")
key.set({ "n", "i" }, "<C-l>", "<C-w>l")

key.set("n", "J", "mzJ`z")
