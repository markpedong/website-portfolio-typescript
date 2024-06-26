package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddTestimonials(ctx *gin.Context) {
	var body models.TestimonialsPayload
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	newTestimonial := models.Testimonials{
		ID:          helpers.NewUUID(),
		Author:      body.Author,
		Description: body.Description,
		Image:       body.Image,
		Job:         body.Job,
	}
	if err := database.DB.Create(&newTestimonial).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func EditTestimonials(ctx *gin.Context) {
	var body struct {
		models.Testimonials
		ID string `json:"id"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	var currTestimonials models.Testimonials
	if err := database.DB.First(&currTestimonials, "id = ?", body.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}
	if err := database.DB.Model(&currTestimonials).Updates(body).Save(&currTestimonials).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetTestimonials(ctx *gin.Context) {
	var testimonials []models.Testimonials
	GetTableByModel(ctx, &testimonials)
}

func DeleteTestimonials(ctx *gin.Context) {
	var testimonials models.Testimonials
	DeleteModelByID(ctx, &testimonials)
}

func ToggleTestimonialStatus(ctx *gin.Context) {
	var service models.Testimonials
	ToggleModelStatus(ctx, &service)
}

func PublicTestimonials(ctx *gin.Context) {
	var testimonials []models.Testimonials
	GetTableByModelStatusON(ctx, &testimonials)

	var testimonialsResponse []models.TestimonialResponse
	for _, v := range testimonials {
		newTestimonialsResponse := models.TestimonialResponse{
			ID:          v.ID,
			Image:       v.Image,
			Author:      v.Author,
			Description: v.Description,
			Job:         v.Job,
		}

		testimonialsResponse = append(testimonialsResponse, newTestimonialsResponse)
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(testimonialsResponse))
}
