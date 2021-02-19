# decription

This application was written in Go and ReactJS. From the Go side it runs a simple web server which works from the build folder of the UI.

# go installation with brew on mac

`brew update && brew install golang`

# create the directories

`mkdir -p $HOME/go/{bin,src,pkg}`

# inside .bashrc or .zshrc put:

`export GOPATH=$HOME/go`

`export GOROOT="$(brew --prefix golang)/libexec"`

`export PATH="$PATH:${GOPATH}/bin:${GOROOT}/bin"`

# installation and running

`make`

# clean

`make clean`

# build

`make build`
