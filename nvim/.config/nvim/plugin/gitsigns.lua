vim.pack.add({ 'https://github.com/lewis6991/gitsigns.nvim' })
require('gitsigns').setup({
on_attach = function()
    local gs = require('gitsigns')

    map("n", "]h", gs.next_hunk, "Next Hunk")
    map("n", "[h", gs.prev_hunk, "Previous Hunk")

    map("n", "<leader>gs", gs.stage_hunk, "Stage hunk")
    map("n", "<leader>gr", gs.reset_hunk, "Reset hunk")
    map("v", "<leader>gs", function()
        gs.stage_hunk({ vim.fn.line("."), vim.fn.line("v") })
    end, "Stage hunk")
    map("v", "<leader>gr", function()
        gs.reset_hunk({ vim.fn.line("."), vim.fn.line("v") })
    end, "Reset hunk")

    map("n", "<leader>gS", gs.stage_buffer, "Stage buffer")
    map("n", "<leader>gR", gs.reset_buffer, "Stage buffer")

    map("n", "<leader>gu", gs.undo_stage_hunk, "Undo stage hunk")

    map("n", "<leader>gp", gs.preview_hunk, "Preview hunk")

    map("n", "<leader>gb", function()
        gs.blame_line({ full = true })
    end, "Blame line")
    map("n", "<leader>gB", gs.toggle_current_line_blame, "Toggle line blame")

    map("n", "<leader>gd", gs.diffthis, "Diff this")
    map("n", "<leader>gD", function()
        gs.diffthis("~")
    end, "Diff this ~")

    map({ "o", "x" }, "gh", ":<C-U>Gitsigns select_hunk<CR>", "Gitsigns select hunk")
end,
})

require('colorscheme').add_groups(function(C)
    return {
        GitSignsCurrentLineBlame = { link = 'NonText' },
        GitSignsAdd = { fg = C.green },
        GitSignsAddInline = { fg = C.green },
        GitSignsAddLn = { fg = C.green },
        GitSignsAddNr = { fg = C.green },
        GitSignsAddPreview = { link = 'DiffAdd' },
        GitSignsChange = { fg = C.yellow },
        GitSignsChangeInline = { link = 'DiffChange' },
        GitSignsChangeLn = { fg = C.yellow },
        GitSignsChangeNr = { fg = C.yellow },
        GitSignsDelete = { fg = C.red },
        GitSignsDeleteInline = { fg = C.red },
        GitSignsDeleteNr = { fg = C.red },
        GitSignsDeletePreview = { link = 'DiffDelete' },
        GitSignsDeleteVirtLn = { link = 'DiffDelete' },
    }
end)
