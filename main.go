package main

import (
	"encoding/json"
	"net/http"

	"github.com/gobuffalo/packr"
	"github.com/zserge/webview"
)

// Message : struct for message
type Message struct {
	Text string `json:"text"`
}

func main() {
	folder := packr.NewBox("./ui/build")

	http.Handle("/", http.FileServer(folder))

	http.HandleFunc("/main", showMessage)

	go http.ListenAndServe(":8000", nil)

	webview.Open("Golang App with React", "http://localhost:8000", 1024, 768, true)
}

func showMessage(w http.ResponseWriter, r *http.Request) {
	message := Message{"Welcome"}

	output, err := json.Marshal(message)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	w.Write(output)
}
