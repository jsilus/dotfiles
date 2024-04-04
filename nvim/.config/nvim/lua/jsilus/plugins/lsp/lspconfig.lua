return {
    "neovim/nvim-lspconfig",
    event = { "BufReadPre", "BufNewFile" },
    dependencies = {
        "hrsh7th/cmp-nvim-lsp",
        { "antosha417/nvim-lsp-file-operations", config = true },
        { "folke/neodev.nvim", config = true },
    },
    config = function()
        local lspconfig = require("lspconfig")
        local mason_lspconfig = require("mason-lspconfig")
        local cmp_nvim_lsp = require("cmp_nvim_lsp")

        vim.api.nvim_create_autocmd("LspAttach", {
            group = vim.api.nvim_create_augroup("UserLspConfig", {}),
            callback = function(ev)

                local function map(mode, lhs, rhs, desc)
                    vim.keymap.set(mode, lhs, rhs, { buffer = ev.buf, silent = true, desc = desc })
                end

                map("n", "gR", "<cmd>Telescope lsp_references<CR>", "Show LSP rederences")

                map("n", "gD", vim.lsp.buf.declaration, "Go to declaration")

                map("n", "gd", "<cmd>Telescope lsp_definitions<CR>", "Show LSP definitions")

                map("n", "gi", "<cmd>Telescope lsp_implementations<CR>", "Show LSP implementations")

                map("n", "gt", "<cmd>Telescope lsp_type_definitions<CR>", "Show LSP type definitions")

                map({"n", "v"}, "<leader>ca", vim.lsp.buf.code_action, "See available code actions")

                map("n", "<leader>rn", vim.lsp.buf.rename, "Smart rename")

                map("n", "<leader>D", "<cmd>Telescope diagnostics bufnr=0<CR>", "Show buffer diagnostics")

                map("n", "<leader>d", vim.diagnostic.open_float, "Show line diagnostics")

                map("n", "[d", vim.diagnostic.goto_prev, "Go to previous diagnostic")

                map("n", "]d", vim.diagnostic.goto_next, "Go to next diagnostic")

                map("n", "K", vim.lsp.buf.hover, "Show documentation for what is under cursor")

                map("n", "<leader>rs", ":LspRestart<CR>", "Restart LSP")
            end,
        })

        local capabilities = cmp_nvim_lsp.default_capabilities()

        local signs = { Error = " ", Warn = " ", Hint = "󰠠 ", Info = " " }
        for type, icon in pairs(signs) do
            local hl = "DiagnosticSign" .. type
            vim.fn.sign_define(hl, { text = icon, texthl = hl, numhl = "" })
        end

        mason_lspconfig.setup_handlers({
            ["lua_ls"] = function()
                lspconfig["lua_ls"].setup({
                    capabilities = capabilities,
                    settings = {
                        diagnostics = {
                            globals = { "vim" },
                        },
                        workspace = {
                            library = {
                                [vim.fn.expand("$VIMRUNTIME/lua")] = true,
                                [vim.fn.stdpath("config") .. "/lua"] = true,
                            },
                        },
                    },
                })
            end,
        })

    end
}
