package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddInformation(ctx *gin.Context) {
	var user models.Users
	if err := helpers.BindValidateJSON(ctx, &user); err != nil {
		return
	}

	if err := database.DB.First(&user).Error; err == nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, "user already exist!")
		return
	}

	user.ID = helpers.NewUUID()
	if err := database.DB.Create(&user).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetInformation(ctx *gin.Context) {
	var user models.Users
	if err := database.DB.First(&user).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(user))
}

func UpdateInformation(ctx *gin.Context) {
	var user models.Users
	if err := helpers.BindValidateJSON(ctx, &user); err != nil {
		return
	}

	if err := database.DB.Updates(&user).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}
