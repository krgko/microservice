package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func SearchProduct(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello World")
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", SearchProduct).Methods("GET")

	if err := http.ListenAndServe(":80", r); err != nil {
		log.Fatal(err)
	}
}
