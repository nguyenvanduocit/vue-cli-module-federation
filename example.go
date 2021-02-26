package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/auth/",  http.StripPrefix("/auth/", http.FileServer(http.Dir("./packages/auth/dist"))))
	http.Handle("/",  http.FileServer(http.Dir("./packages/shell/dist")))
	log.Fatal(http.ListenAndServe(":8080", nil))
}
