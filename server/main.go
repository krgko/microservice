package main

import (
	"fmt"
	"log"
	"net/http"

	. "./config"
	. "./dao" // . "./models"
	"github.com/gorilla/mux"
)

var config = Config{}
var dao = ProductsDAO{}

func SearchProduct(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello World")
}

func init() {
	config.Read()

	dao.Server = config.Server
	dao.Database = config.Database
	dao.Connect()
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", SearchProduct).Methods("GET")

	if err := http.ListenAndServe(":3000", r); err != nil {
		log.Fatal(err)
	}
}
