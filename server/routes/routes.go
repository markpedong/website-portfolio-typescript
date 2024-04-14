package routes

import (
	"portfolio/controllers"

	"github.com/gin-gonic/gin"
)

func CreateRoutes(r *gin.Engine) {
	api := r.Group("/api")
	// api.Use(middleware.Authentication)
	{
		api.POST("/uploadImage", controllers.UploadImage)
	}

	website := r.Group("/info")
	{
		website.GET("/getDetails", controllers.GetInformation)
		website.POST("/addDetails", controllers.AddInformation)
		website.POST("/updateDetails", controllers.UpdateInformation)
		website.POST("/addWebsiteDetails", controllers.AddWebsiteDetails)
		website.GET("/getWebsiteDetails", controllers.GetWebsiteDetails)
		website.POST("/updateWebsiteDetails", controllers.UpdateWebsiteDetails)
	}

	links := r.Group("/links")
	{
		links.POST("/addLinks", controllers.AddLinks)
		links.GET("/getLinks", controllers.GetLinks)
		links.POST("/updateLinks", controllers.UpdateLinks)
		links.POST("/toggleLinkStatus", controllers.ToggleLinkStatus)
		links.POST("/deleteLinks", controllers.DeleteLinks)
	}

	services := r.Group("/services")
	{
		services.POST("/addServices", controllers.AddServices)
		services.GET("/getServices", controllers.GetServices)
		services.POST("/updateServices", controllers.UpdateServices)
		services.POST("/deleteServices", controllers.DeleteServices)
		services.POST("/toggleServiceStatus", controllers.ToggleServiceStatus)
	}

	portfolio := r.Group("/portfolios")
	{
		portfolio.POST("/addPortfolios", controllers.AddPortfolios)
		portfolio.GET("/getPortfolios", controllers.GetPortfolios)
		portfolio.POST("/updatePortfolios", controllers.UpdatePortfolios)
		portfolio.POST("/deletePortfolios", controllers.DeletePortfolios)
		portfolio.POST("/togglePortfolioStatus", controllers.TogglePortfolioStatus)
	}

	experience := r.Group("/experiences")
	{
		experience.POST("/addExperiences", controllers.AddExperiences)
		experience.GET("/getExperiences", controllers.GetExperiences)
		experience.POST("/updateExperiences", controllers.UpdateExperiences)
		experience.POST("/deleteExperiences", controllers.DeleteExperiences)
		experience.POST("/toggleExperienceStatus", controllers.ToggleExperienceStatus)
	}

	blogs := r.Group("/blogs")
	{
		blogs.POST("/addBlogs", controllers.AddBlogs)
		blogs.GET("/getBlogs", controllers.GetBlogs)
		blogs.POST("/updateBlogs", controllers.UpdateBlogs)
		blogs.POST("/toggleBlogStatus", controllers.ToggleBlogStatus)
		blogs.POST("/deleteBlogs", controllers.DeleteBlogs)
	}

	testimonials := r.Group("/testimonials")
	{
		testimonials.POST("/addTestimonials", controllers.AddTestimonials)
		testimonials.GET("/getTestimonials", controllers.GetTestimonials)
		testimonials.POST("/updateTestimonials", controllers.EditTestimonials)
		testimonials.DELETE("/deleteTestimonials", controllers.DeleteTestimonials)
	}

	educations := r.Group("/educations")
	{
		educations.POST("/addEducations", controllers.AddEducations)
		educations.GET("/getEducations", controllers.GetEducations)
		educations.POST("/updateEducations", controllers.EditEducations)
		educations.DELETE("/deleteEducations", controllers.DeleteEducations)
	}

	messages := r.Group("/messages")
	{
		messages.GET("/getMessages", controllers.GetMessages)
		messages.POST("/addMessages", controllers.AddMessages)
	}
}
