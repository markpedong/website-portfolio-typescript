package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddLinks(ctx *gin.Context) {
	var body struct {
		Link string `json:"link" validate:"required"`
		Type string `json:"type" validate:"required"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	newLink := models.Links{
		ID:   helpers.NewUUID(),
		Link: body.Link,
		Type: body.Type,
	}
	if err := database.DB.Create(&newLink).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetLinks(ctx *gin.Context) {
	var links []models.Links
	if err := database.DB.Find(&links).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(links))
}

func UpdateLinks(ctx *gin.Context) {
	var links struct {
		ID      string `json:"id" validate:"required"`
		NewLink string `json:"new_link" validate:"required"`
	}
	if err := helpers.BindValidateJSON(ctx, &links); err != nil {
		return
	}

	var currLink models.Links
	if err := database.DB.First(&currLink, "id = ?", links.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	currLink.Link = links.NewLink
	database.DB.Save(&currLink)

	helpers.JSONResponse(ctx, "")
}

func DeleteLinks(ctx *gin.Context) {
	var links struct {
		ID string `json:"id"`
	}
	if err := helpers.BindValidateJSON(ctx, &links); err != nil {
		return
	}

	if err := database.DB.Delete(&models.Links{}, "id = ?", links.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(links))
}
