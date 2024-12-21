return {
    "mfussenegger/nvim-lint",
    config = function()
        local lint = require("lint")

        lint.linters_by_ft = {
            cpp = { "cpplint" },
        }

        local cpplint = lint.linters.cpplint
        cpplint.args = {
            '--filter=-legal,-readability/todo,-build/include',
            '--linelength=120'
        }

        vim.api.nvim_create_autocmd({ "BufWritePost" }, {
            callback = function()

            lint.try_lint()

            end,
        })
    end
}
