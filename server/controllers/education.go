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
	skillArr := []models.Skills{}
	for _, v := range education.Skills {
		newSkill := models.Skills{
			ID:          helpers.NewUUID(),
			EducationID: newEducation.ID,
			Name:        v.Name,
			Percentage:  v.Percentage,
		}

		skillArr = append(skillArr, newSkill)
	}
	newEducation.Skills = skillArr

	if err := database.DB.Create(&newEducation).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")

}

func GetEducations(ctx *gin.Context) {
	var educations []models.Education

	if err := database.DB.Preload("Skills").Find(&educations).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(educations))
}

func EditEducations(ctx *gin.Context) {
	var body struct {
		models.EducationPayload
		ID string `json:"id"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	var currEducation models.Education
	if err := database.DB.First(&currEducation, "id = ?", body.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}
	if err := database.DB.Model(&currEducation).Updates(body).Save(&currEducation).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}
func DeleteEducations(ctx *gin.Context) {}

func UpdateSkills(ctx *gin.Context) {}
