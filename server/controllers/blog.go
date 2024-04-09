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
		Date        int    `json:"date" validate:"required"`
		Description string `json:"description" validate:"required"`
		Link        string `json:"ink"`
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

func GetBlogs(ctx *gin.Context) {
	var blogs []models.Blogs
	if err := database.DB.Find(&blogs).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(blogs))

}

func UpdateBlogs(ctx *gin.Context) {
	var blogs struct {
		ID          string `json:"id"`
		Title       string `json:"title"  validate:"required"`
		Date        int    `json:"date" validate:"required"`
		Description string `json:"description" validate:"required"`
		Link        string `json:"ink"`
		Image       string `json:"image" validate:"required"`
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

func DeleteBlogs(ctx *gin.Context) {
	var body struct {
		ID string `json:"id"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	var currService models.Blogs
	if err := database.DB.First(&currService, "id = ?", body.ID).Delete(&currService).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}
