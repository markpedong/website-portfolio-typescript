package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddBlogs(ctx *gin.Context) {
	var body struct {
		Title       string `json:"title"  validate:"required"`
		Date        string `json:"date" validate:"required"`
		Description string `json:"description" validate:"required"`
		Link        string `json:"link"`
		Image       string `json:"image" validate:"required"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	newBlogItem := models.Blogs{
		ID:          helpers.NewUUID(),
		Title:       body.Title,
		Date:        body.Date,
		Description: body.Description,
		Link:        body.Link,
		Image:       body.Image,
	}
	if err := database.DB.Create(&newBlogItem).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func UpdateBlogs(ctx *gin.Context) {
	var blogs struct {
		models.BlogsPayload
		ID string `json:"id"`
	}
	if err := helpers.BindValidateJSON(ctx, &blogs); err != nil {
		return
	}

	var currBlogs models.Blogs
	if err := database.DB.First(&currBlogs, "id = ?", blogs.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	if err := database.DB.Model(&currBlogs).Updates(blogs).Save(&currBlogs).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetBlogs(ctx *gin.Context) {
	var blogs []models.Blogs
	GetTableByModel(ctx, &blogs)
}

func DeleteBlogs(ctx *gin.Context) {
	var blogs models.Blogs
	DeleteModelByID(ctx, &blogs)
}

func ToggleBlogStatus(ctx *gin.Context) {
	var blogs models.Blogs
	ToggleModelStatus(ctx, &blogs)
}

func PublicBlogs(ctx *gin.Context) {
	var blogs []models.Blogs
	GetTableByModelStatusON(ctx, &blogs)
}
