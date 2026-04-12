if (vim.fn.executable('clangd') == 1) then
    vim.lsp.enable('clangd')
else
    print('clangd not found')
end
