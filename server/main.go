package main

import (
	"github.com/gin-gonic/gin"
)

func CorsMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {

	}
}
func main() {
	r := gin.New()

	r.Use(CorsMiddleware())
	r.Run()
}
