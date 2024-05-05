return {
    "lervag/vimtex",
    event = { "BufReadPre", "BufNewFile" },
    config = function()
        vim.g.tex_flavor = "latex"
        vim.g.vimtex_view_method = "zathura"
        vim.g.vimtex_compiler_methd = "latexmk"
        vim.g.vimtex_latexkm_options = "-shell-escape"
        vim.g.vimtex_quickfix_mode = 0
        vim.opt.conceallevel = 1
        vim.g.tex_conceal = "abdmg"
    end,
}
