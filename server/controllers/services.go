package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddServices(ctx *gin.Context) {
	var service models.Services
	if err := helpers.BindValidateJSON(ctx, &service); err != nil {
		return
	}

	service.ID = helpers.NewUUID()
	if err := database.DB.Create(&service).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func UpdateServices(ctx *gin.Context) {
	var services struct {
		ID          string `json:"id" validate:"required"`
		Title       string `json:"title" validate:"required"`
		Description string `json:"description" validate:"required"`
		Logo        string `json:"logo" validate:"required"`
	}
	if err := helpers.BindValidateJSON(ctx, &services); err != nil {
		return
	}

	var currService models.Services
	if err := database.DB.First(&currService, "id = ?", services.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	if err := database.DB.Model(&currService).Updates(services).Save(&currService).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetServices(ctx *gin.Context) {
	var services []models.Services
	GetTableByModel(ctx, &services)
}

func DeleteServices(ctx *gin.Context) {
	var services models.Services
	DeleteModelByID(ctx, &services)
}

func ToggleServiceStatus(ctx *gin.Context) {
	var service models.Services
	ToggleModelStatus(ctx, &service)
}

func PublicServices(ctx *gin.Context) {
	var services []models.Services
	GetTableByModelStatusON(ctx, &services)

	var servicesResponse []models.ServicesResponse
	for _, v := range services {
		newServicesResponse := models.ServicesResponse{
			ID:          v.ID,
			Title:       v.Title,
			Description: v.Description,
			Logo:        v.Logo,
		}

		servicesResponse = append(servicesResponse, newServicesResponse)
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(servicesResponse))
}
