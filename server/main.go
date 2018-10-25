package main

import (
	"fmt"
	"net/http"
	. "server/config"
	. "server/dao" // . "./models"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

var config = Config{}
var dao = ProductsDAO{}

func init() {
	config.Read()

	dao.Server = config.Server
	dao.Database = config.Database
	dao.Connect()
}

func main() {
	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("./public", true)))
	api := router.Group("/api")
	{
		api.GET("/product/search", func(c *gin.Context) {
			products, err := dao.FindAll()
			if err != nil {
				fmt.Println(err)
				return
			}
			c.JSON(http.StatusOK, gin.H{
				"message": products,
			})
		})
	}

	router.Run(":3000")
}
