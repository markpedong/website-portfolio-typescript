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

	var newSkills []models.ExpSkill
	for _, v := range body.Skills {
		newSkill := models.ExpSkill{
			ID:           helpers.NewUUID(),
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

func UpdateExperiences(ctx *gin.Context) {
	var body models.Experiences
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusBadRequest, "Invalid request payload")
		return
	}
	var newSkills []models.ExpSkill
	if err := database.DB.Where("experience_id = ?", body.ID).Delete(&newSkills).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	for _, v := range body.Skills {
		newSkill := models.ExpSkill{
			ID:           helpers.NewUUID(),
			ExperienceID: body.ID,
			Name:         v.Name,
			Percentage:   v.Percentage,
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

func GetExperiences(ctx *gin.Context) {
	var experiences []models.Experiences
	GetTableByModel(ctx, &experiences, "Skills")
}

func DeleteExperiences(ctx *gin.Context) {
	var experience models.Experiences
	DeleteModelByID(ctx, &experience)
}

func ToggleExperienceStatus(ctx *gin.Context) {
	var experience models.Experiences
	ToggleModelStatus(ctx, &experience)
}

func PublicExperiences(ctx *gin.Context) {
	var experiences []models.Experiences
	GetTableByModelStatusON(ctx, &experiences)

	var experienceResponse []models.ExperienceResponse
	for _, v := range experiences {
		var skillsResponse []models.ExpSkillResponse
		for _, q := range v.Skills {
			skillResponse := models.ExpSkillResponse{
				ID:         q.ID,
				Name:       q.Name,
				Percentage: q.Percentage,
			}

			skillsResponse = append(skillsResponse, skillResponse)
		}
		newExperienceResponse := models.ExperienceResponse{
			ID:       v.ID,
			Company:  v.Company,
			Title:    v.Title,
			Location: v.Location,
			Started:  v.Started,
			Ended:    v.Ended,
			Skills:   skillsResponse,
		}

		experienceResponse = append(experienceResponse, newExperienceResponse)
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(experienceResponse))
}
