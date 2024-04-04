return {
    "nvim-telescope/telescope.nvim",
    branch = "0.1.x",
    dependencies = {
        "nvim-lua/plenary.nvim",
        { "nvim-telescope/telescope-fzf-native.nvim", build = "make" },
        "nvim-tree/nvim-web-devicons",
        "folke/todo-comments.nvim",
    },
    config = function()
        local telescope = require("telescope")
        local actions = require("telescope.actions")

        telescope.setup({
            defaults = {
                path_display = { "smart" },
                mappings = {
                    i = {
                        ["<C-k>"] = actions.move_selection_previous,
                        ["<C-j>"] = actions.move_selection_next,
                        ["<C-q>"] = actions.send_selected_to_qflist + actions.open_qflist,
                    }
                }
            }
        })

        telescope.load_extension("fzf")

        map("n", "<leader>ff", "<cmd>Telescope find_files<cr>", "Find files in cwd")
        map("n", "<leader>fr", "<cmd>Telescope oldfiles<cr>", "Find recent files")
        map("n", "<leader>fg", "<cmd>Telescope live_grep<cr>", "Find live grep in cwd")
        map("n", "<leader>fc", "<cmd>Telescope colorscheme<cr>", "Find colorscheme")
        map("n", "<leader>ft", "<cmd>TodoTelescope<cr>", "Find todos")
    end
}
