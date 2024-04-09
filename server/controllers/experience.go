package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddExperiences(ctx *gin.Context) {
	var body models.ExperiencePayload
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	newExperience := models.Experiences{
		ID:       helpers.NewUUID(),
		Company:  body.Company,
		Title:    body.Title,
		Location: body.Location,
		Started:  body.Started,
		Ended:    body.Ended,
	}
	newSkills := []models.Skills{}
	for _, v := range body.Skills {
		newSkill := models.Skills{
			ID:           helpers.NewUUID(),
			EducationID:  "-",
			ExperienceID: newExperience.ID,
			Name:         v.Name,
			Percentage:   v.Percentage,
		}
		newSkills = append(newSkills, newSkill)
	}

	newExperience.Skills = newSkills
	if err := database.DB.Create(&newExperience).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetExperiences(ctx *gin.Context) {
	var experiences []models.Experiences

	if err := database.DB.Find(&experiences).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(experiences))
}

func UpdateExperiences(ctx *gin.Context) {
	var body struct {
		models.ExperiencePayload
		ID string `json:"id" validate:"required"`
	}

	var currExperience models.Experiences
	if err := database.DB.First(&currExperience, "id = ?", body.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	var newSkills []models.Skills
	for _, v := range body.Skills {
		newSkill := models.Skills{
			ID:           helpers.NewUUID(),
			ExperienceID: currExperience.ID,
			EducationID:  "-",
			Name:         v.Name,
			Percentage:   v.Percentage,
		}

		newSkills = append(newSkills, newSkill)
	}
	currExperience.Skills = newSkills

	if err := database.DB.Model(&currExperience).Updates(body).Save(&currExperience).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")

}
func DeleteExperiences(ctx *gin.Context) {
	var body struct {
		ID string `json:"id"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	var currExperience models.Experiences
	if err := database.DB.First(&currExperience, "id = ?", body.ID).Delete(&currExperience).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}
