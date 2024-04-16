package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddEducations(ctx *gin.Context) {
	var body models.EducationPayload
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	newEducation := models.Education{
		ID:          helpers.NewUUID(),
		School:      body.School,
		Course:      body.Course,
		Started:     body.Started,
		Ended:       body.Ended,
		Description: body.Description,
	}

	var newSkills []models.EduSkill
	for _, v := range body.Skills {
		newSkill := models.EduSkill{
			ID:          helpers.NewUUID(),
			EducationID: newEducation.ID,
			Name:        v.Name,
			Percentage:  v.Percentage,
		}

		newSkills = append(newSkills, newSkill)
	}

	newEducation.Skills = newSkills
	if err := database.DB.Create(&newEducation).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")

}

func UpdateEducations(ctx *gin.Context) {
	var body models.Education
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}
	var newSkills []models.EduSkill
	if err := database.DB.Where("education_id = ?", body.ID).Delete(&newSkills).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	for _, v := range body.Skills {
		newSkill := models.EduSkill{
			ID:          helpers.NewUUID(),
			EducationID: body.ID,
			Name:        v.Name,
			Percentage:  v.Percentage,
		}

		newSkills = append(newSkills, newSkill)
	}

	body.Skills = newSkills
	if err := database.DB.Save(&body).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetEducations(ctx *gin.Context) {
	var educations []models.Education
	GetTableByModel(ctx, &educations, "Skills")
}

func DeleteEducations(ctx *gin.Context) {
	var education models.Education
	DeleteModelByID(ctx, &education)
}

func ToggleEducationStatus(ctx *gin.Context) {
	var education models.Education
	ToggleModelStatus(ctx, &education)
}

func PublicEducations(ctx *gin.Context) {
	var education []models.Education
	GetTableByModelStatusON(ctx, &education)
}
