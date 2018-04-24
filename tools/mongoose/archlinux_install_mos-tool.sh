git clone https://github.com/cesanta/mos-tool
cd mos-tool/mos/archlinux_pkgbuild/mos-release
makepkg
pacman -U ./mos-*.tar.xz