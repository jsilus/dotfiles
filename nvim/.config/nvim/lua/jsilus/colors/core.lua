local colors = require("catppuccin.palettes").get_palette()
local ColorMap = {
    NormalFloat = { bg = colors.mantle },
    CmpNormal = { bg = colors.mantle },
}

for hl, col in pairs(ColorMap) do
	vim.api.nvim_set_hl(0, hl, col)
end

local function file_exists(name)
    local f = io.open(name, "r")
    return f ~= nil and io.close(f)
end

local cache_file = os.getenv("HOME") .. "/.cache/nvim/theme"
if (file_exists(cache_file)) then
    vim.cmd.source(cache_file)
end
