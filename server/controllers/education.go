package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddEducations(ctx *gin.Context) {
	var education models.EducationPayload
	if err := helpers.BindValidateJSON(ctx, &education); err != nil {
		return
	}

	newEducation := models.Education{
		ID:          helpers.NewUUID(),
		School:      education.School,
		Course:      education.Course,
		Started:     education.Started,
		Ended:       education.Ended,
		Description: education.Description,
	}

	if err := database.DB.Create(&newEducation).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")

}

func EditEducations(ctx *gin.Context) {
	var body struct {
		models.EducationPayload
		ID string `json:"id" validate:"required"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	var currEducation models.Education
	if err := database.DB.First(&currEducation, "id = ?", body.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	if err := database.DB.Updates(body).Save(&currEducation).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

// func UpdateSkills(ctx *gin.Context) {
// 	var body struct {
// 		ID       string `json:"id"`
// 		NewSkill string `json:"new_skill"`
// 	}

// 	var currSkill models.Skills
// 	if err := database.DB.First(&currSkill, "id = ?", body.ID).Error; err != nil {
// 		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
// 		return
// 	}

// 	currSkill.Name = body.NewSkill
// 	database.DB.Save(&currSkill)

// 	helpers.JSONResponse(ctx, "")
// }

func GetEducations(ctx *gin.Context) {
	var educations []models.Education
	GetTableByModel(ctx, &educations)
}

func DeleteEducations(ctx *gin.Context) {
	var education models.Education
	DeleteModelByID(ctx, &education)
}

func ToggleEducationStatus(ctx *gin.Context) {
	var education models.Education
	ToggleModelStatus(ctx, &education)
}
