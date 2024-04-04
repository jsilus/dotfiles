local colors = require("catppuccin.palettes").get_palette()
local ColorMap = {
    NormalFloat = { bg = colors.mantle },
    CmpNormal = { bg = colors.mantle },
}

for hl, col in pairs(ColorMap) do
	vim.api.nvim_set_hl(0, hl, col)
end
