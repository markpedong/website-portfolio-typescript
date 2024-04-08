package routes

import (
	"portfolio/controllers"

	"github.com/gin-gonic/gin"
)

func CreateRoutes(r *gin.Engine) {
	self := r.Group("/info")

	self.GET("/details", controllers.GetInformation)
}
