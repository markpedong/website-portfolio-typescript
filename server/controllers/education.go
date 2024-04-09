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
			ID:           helpers.NewUUID(),
			EducationID:  newEducation.ID,
			ExperienceID: "-",
			Name:         v.Name,
			Percentage:   v.Percentage,
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

	var newSkills []models.Skills
	for _, v := range body.Skills {
		newSkill := models.Skills{
			ID:           helpers.NewUUID(),
			EducationID:  currEducation.ID,
			ExperienceID: "-",
			Name:         v.Name,
			Percentage:   v.Percentage,
		}

		newSkills = append(newSkills, newSkill)
	}
	currEducation.Skills = newSkills

	if err := database.DB.Model(&currEducation).Updates(body).Save(&currEducation).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func DeleteEducations(ctx *gin.Context) {
	var body struct {
		ID string `json:"id"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	var currService models.Education
	if err := database.DB.First(&currService, "id = ?", body.ID).Delete(&currService).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func UpdateSkills(ctx *gin.Context) {
	var body struct {
		ID       string `json:"id"`
		NewSkill string `json:"new_skill"`
	}

	var currSkill models.Skills
	if err := database.DB.First(&currSkill, "id = ?", body.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	currSkill.Name = body.NewSkill
	database.DB.Save(&currSkill)

	helpers.JSONResponse(ctx, "")
}
