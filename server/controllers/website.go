package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddWebsiteDetails(ctx *gin.Context) {
	var website models.Website
	if err := helpers.BindValidateJSON(ctx, &website); err != nil {
		return
	}

	if err := database.DB.First(&website).Error; err == nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, "website details already exist!")
		return
	}

	website.ID = helpers.NewUUID()
	if err := database.DB.Create(&website).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetWebsiteDetails(ctx *gin.Context) {
	var website models.Website

	if err := database.DB.Preload("Colors").First(&website).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(website))
}

func UpdateWebsiteDetails(ctx *gin.Context) {
	var website models.Website
	if err := helpers.BindValidateJSON(ctx, &website); err != nil {
		return
	}

	if err := database.DB.Updates(&website).Save(&website).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}
