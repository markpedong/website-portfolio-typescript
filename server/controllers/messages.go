package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func GetMessages(ctx *gin.Context) {
	var msgs []models.Messages
	if err := database.DB.Find(&msgs).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(msgs))
}

func AddMessages(ctx *gin.Context) {
	var msg struct {
		Email   string `json:"email" validate:"required"`
		Name    string `json:"name" validate:"required"`
		Message string `json:"message" validate:"required"`
	}
	if err := helpers.BindValidateJSON(ctx, &msg); err != nil {
		return
	}

	newMsg := models.Messages{
		ID:      helpers.NewUUID(),
		Name:    msg.Name,
		Email:   msg.Email,
		Message: msg.Message,
	}
	if err := database.DB.Create(&newMsg).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}
