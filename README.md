## Installing

Install `git` and `stow` with package manager.

Install with
```sh
git clone git@github.com:jsilus/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
```

Run `stow` to add symlinks into the proper directories
```sh
stow */     # installs everything
stow nvim   # installs only nvim
```
