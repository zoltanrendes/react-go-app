.PHONY: all

all: clean build run

.PHONY: clean

clean:
	@rm -rf ./goreact.app ./ui/build
	@echo "[✔️] Clean complete!"

.PHONY: build

build:
	@cd ./ui && yarn install
	@cd ./ui && yarn build
	@mkdir -p ./goreact.app/Contents/MacOS
	@go build -o ./goreact.app/Contents/MacOS/goreact
	@echo "[✔️] Build complete!"

.PHONY: run

run:
	@open ./goreact.app
	@echo "[✔️] Application is running!"
