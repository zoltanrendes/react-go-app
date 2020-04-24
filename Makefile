.PHONY: all

all: clean test build run

.PHONY: clean

clean:
	@rm -rf ./goreact.app ./ui/build
	@echo "[✔️] Clean complete!"

.PHONY: build

test:
	@cd ./ui && yarn install
	@cd ./ui && yarn test:nowatch

build:
	@cd ./ui && yarn install
	@cd ./ui && yarn build
	@go get github.com/gobuffalo/packr
	@go get github.com/zserge/webview
	@mkdir -p ./goreact.app/Contents/MacOS
	@go build -o ./goreact.app/Contents/MacOS/goreact
	@echo "[✔️] Build complete!"

.PHONY: run

run:
	@open ./goreact.app
	@echo "[✔️] Application is running!"
