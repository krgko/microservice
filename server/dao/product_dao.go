package dao

import (
	"log"

	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type ProductsDAO struct {
	Server   string
	Database string
}

type Product struct {
	message string
}

var db *mgo.Database

const (
	COLLECTION = "sample"
)

func (m *ProductsDAO) Connect() {
	session, err := mgo.Dial(m.Server)
	if err != nil {
		log.Fatal(err)
	}
	db = session.DB(m.Database)
}

func (m *ProductsDAO) FindAll() ([]Product, error) {
	var products []Product
	err := db.C(COLLECTION).Find(bson.M{}).All(&products)
	return products, err
}
