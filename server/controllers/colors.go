package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func UpdateColors(ctx *gin.Context) {
	var body struct {
		ID    string `json:"id" validate:"required"`
		Theme string `json:"theme"`
		Color string `json:"color"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	var color models.Color
	if err := database.DB.First(&color, "id = ?", body.ID).Updates(&body).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}
