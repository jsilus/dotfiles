return {
    "L3MON4D3/LuaSnip",
    version = "v2.*",
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
        })

        require("luasnip.loaders.from_lua").load({paths = "~/.config/nvim/lua/jsilus/snippets"})

    end,
}
