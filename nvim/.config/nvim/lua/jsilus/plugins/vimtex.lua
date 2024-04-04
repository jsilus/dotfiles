return {
    "lervag/vimtex",
    event = { "BufReadPre", "BufNewFile" },
    config = function()
        vim.g.tex_flavor = "latex"
        vim.g.vimtex_view_method = "zathura"
        vim.g.maplocalleader = " "
    end,
}
