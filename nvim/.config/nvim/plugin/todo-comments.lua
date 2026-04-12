-- TODO: consider replacement with mini.hipatterns
vim.pack.add({ 'https://github.com/folke/todo-comments.nvim' })
require('todo-comments').setup({
    keywords = {
        FIXME = { icon = " ", color = "error", alt = { "BUG", "ISSUE" } },
        WARN = { icon = " ", color = "warning", alt = { "WARNING" } },
        TODO = { icon = " ", color = "info" },
        NOTE = { icon = " ", color = "hint", alt = { "INFO" } },
        MAYBE = { icon = " ", color = "hint" },
    },
})
