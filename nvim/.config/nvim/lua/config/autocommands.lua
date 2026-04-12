local augroup = vim.api.nvim_create_augroup
local autocmd = vim.api.nvim_create_autocmd

local highlight_yank = augroup('HighlightYank', { clear = true })
autocmd('TextYankPost', {
    desc = 'highlight yanked text',
    callback = function() vim.hl.on_yank() end,
    group = highlight_yank,
})
