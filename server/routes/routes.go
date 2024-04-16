package routes

import (
	"portfolio/controllers"
	"portfolio/middleware"

	"github.com/gin-gonic/gin"
)

func CreateRoutes(r *gin.Engine) {
	public := r.Group("/public")
	{
		public.POST("/login", controllers.Login)
		public.GET("/links", controllers.PublicLinks)
		public.GET("/experiences", controllers.PublicExperiences)
		public.GET("/educations", controllers.PublicEducations)
		public.GET("/portfolios", controllers.PublicPortfolios)
		public.GET("/services", controllers.PublicServices)
		public.GET("/testimonials", controllers.PublicTestimonials)
		public.GET("/blogs", controllers.PublicBlogs)
	}

	api := r.Group("/api")
	api.Use(middleware.Authentication)
	{
		api.POST("/uploadImage", controllers.UploadImage)
		// add public endpoints that will be called by our client
		// add login function and wrap everything in middleware.
	}

	website := r.Group("/info")
	website.Use(middleware.Authentication)
	{
		website.GET("/getDetails", controllers.GetInformation)
		website.POST("/addDetails", controllers.AddInformation)
		website.POST("/updateDetails", controllers.UpdateInformation)
		website.POST("/addWebsiteDetails", controllers.AddWebsiteDetails)
		website.GET("/getWebsiteDetails", controllers.GetWebsiteDetails)
		website.POST("/updateWebsiteDetails", controllers.UpdateWebsiteDetails)
	}

	links := r.Group("/links")
	links.Use(middleware.Authentication)
	{
		links.POST("/addLinks", controllers.AddLinks)
		links.GET("/getLinks", controllers.GetLinks)
		links.POST("/updateLinks", controllers.UpdateLinks)
		links.POST("/toggleLinkStatus", controllers.ToggleLinkStatus)
		links.POST("/deleteLinks", controllers.DeleteLinks)
	}

	services := r.Group("/services")
	services.Use(middleware.Authentication)
	{
		services.POST("/addServices", controllers.AddServices)
		services.GET("/getServices", controllers.GetServices)
		services.POST("/updateServices", controllers.UpdateServices)
		services.POST("/deleteServices", controllers.DeleteServices)
		services.POST("/toggleServiceStatus", controllers.ToggleServiceStatus)
	}

	portfolio := r.Group("/portfolios")
	portfolio.Use(middleware.Authentication)
	{
		portfolio.POST("/addPortfolios", controllers.AddPortfolios)
		portfolio.GET("/getPortfolios", controllers.GetPortfolios)
		portfolio.POST("/updatePortfolios", controllers.UpdatePortfolios)
		portfolio.POST("/deletePortfolios", controllers.DeletePortfolios)
		portfolio.POST("/togglePortfolioStatus", controllers.TogglePortfolioStatus)
	}

	experience := r.Group("/experiences")
	experience.Use(middleware.Authentication)
	{
		experience.POST("/addExperiences", controllers.AddExperiences)
		experience.GET("/getExperiences", controllers.GetExperiences)
		experience.POST("/updateExperiences", controllers.UpdateExperiences)
		experience.POST("/deleteExperiences", controllers.DeleteExperiences)
		experience.POST("/toggleExperienceStatus", controllers.ToggleExperienceStatus)
	}

	blogs := r.Group("/blogs")
	blogs.Use(middleware.Authentication)
	{
		blogs.POST("/addBlogs", controllers.AddBlogs)
		blogs.GET("/getBlogs", controllers.GetBlogs)
		blogs.POST("/updateBlogs", controllers.UpdateBlogs)
		blogs.POST("/toggleBlogStatus", controllers.ToggleBlogStatus)
		blogs.POST("/deleteBlogs", controllers.DeleteBlogs)
	}

	testimonials := r.Group("/testimonials")
	testimonials.Use(middleware.Authentication)
	{
		testimonials.POST("/addTestimonials", controllers.AddTestimonials)
		testimonials.GET("/getTestimonials", controllers.GetTestimonials)
		testimonials.POST("/updateTestimonials", controllers.EditTestimonials)
		testimonials.POST("/deleteTestimonials", controllers.DeleteTestimonials)
		testimonials.POST("/toggleTestimonialStatus", controllers.ToggleTestimonialStatus)
	}

	educations := r.Group("/educations")
	educations.Use(middleware.Authentication)
	{
		educations.POST("/addEducations", controllers.AddEducations)
		educations.GET("/getEducations", controllers.GetEducations)
		educations.POST("/updateEducations", controllers.UpdateEducations)
		educations.POST("/deleteEducations", controllers.DeleteEducations)
		educations.POST("/toggleEducationStatus", controllers.ToggleEducationStatus)
	}

	messages := r.Group("/messages")
	messages.Use(middleware.Authentication)
	{
		messages.GET("/getMessages", controllers.GetMessages)
		messages.POST("/addMessages", controllers.AddMessages)
	}
}
