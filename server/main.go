package main

import (
	"log"
	"net/http"
	"portfolio/cloudinary"
	"portfolio/database"
	"portfolio/routes"

	"github.com/gin-gonic/gin"
	_ "github.com/joho/godotenv/autoload"
)

func init() {
	database.DBSetup()
}
func CorsMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		allowedOrigins := []string{"https://markpedong.com", "https://markpedong-admin.vercel.app"}
		origin := ctx.Request.Header.Get("Origin")

		for _, allowedOrigin := range allowedOrigins {
			if origin == allowedOrigin {
				ctx.Writer.Header().Set("Access-Control-Allow-Origin", allowedOrigin)
				break
			}
		}

		ctx.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		ctx.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With, Token")
		ctx.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if ctx.Request.Method == "OPTIONS" {
			ctx.AbortWithStatus(http.StatusNoContent)
			return
		}

		ctx.Next()
	}
}
func main() {
	cloudinary.Init()
	r := gin.New()

	r.Use(CorsMiddleware())
	r.Use(gin.Logger())

	r.MaxMultipartMemory = 20 << 20
	routes.CreateRoutes(r)
	log.Fatal(r.Run(":8080"))
}
