package main

import (
	"log"
	"portfolio/routes"

	"github.com/gin-gonic/gin"
)

func CorsMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {

	}
}
func main() {
	r := gin.New()

	r.Use(CorsMiddleware())
	r.Use(gin.Logger())

	r.MaxMultipartMemory = 20 << 20
	routes.CreateRoutes(r)
	log.Fatal(r.Run(":8080"))
}
