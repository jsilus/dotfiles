return {
    "L3MON4D3/LuaSnip",
    version = "v2.*",
    build = "make install_jsregexp",
    config = function()
        local ls = require("luasnip")

        ls.setup({
            snip_env = {
                s = function(...)
                    local snip = ls.s(...)
                    table.insert(getfenv(2).ls_file_snippets, snip)
                end,
                parse = function(...)
                    local snip = ls.parser.parse_snipper(...)
                    table.insert(getfenv(2).ls_file_snippets, snip)
                end,
            },
            enable_autosnippets = true,
            update_events = "TextChanged,TextChangedI",
            store_selection_keys = "<Tab>",
        })

        vim.keymap.set({ "i", "s" }, "<C-l>", function()
            if ls.choice_active() then
                ls.change_choice(1)
            end
        end)
        vim.keymap.set({ "i", "s" }, "<C-h>", function()
            if ls.choice_active() then
                ls.change_choice(-1)
            end
        end)
        vim.keymap.set({ "i", "s" }, "<C-u>", function()
            if ls.choice_active() then
                require("luasnip.extras.select_choice")()
            end
        end)

        require("luasnip.loaders.from_lua").load({paths = "~/.config/nvim/lua/jsilus/snippets"})

    end,
}
