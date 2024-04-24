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
	var newDescriptions []models.ExpDesc
	for _, v := range body.Descriptions {
		newSkill := models.ExpDesc{
			ID:           helpers.NewUUID(),
			ExperienceID: newExperience.ID,
			Description:  v,
		}

		newDescriptions = append(newDescriptions, newSkill)
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
	newExperience.Descriptions = newDescriptions
	if err := database.DB.Create(&newExperience).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func UpdateExperiences(ctx *gin.Context) {
	var body struct {
		models.ExperiencePayload
		ID string `json:"id" validate:"required"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusBadRequest, err.Error())
		return
	}
	var newSkills []models.ExpSkill
	if err := database.DB.Where("experience_id = ?", body.ID).Delete(&newSkills).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}
	var newDescriptions []models.ExpDesc
	if err := database.DB.Where("experience_id = ?", body.ID).Delete(&newDescriptions).Error; err != nil {
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
	for _, v := range body.Descriptions {
		newDescription := models.ExpDesc{
			ID:           helpers.NewUUID(),
			ExperienceID: body.ID,
			Description:  v,
		}

		newDescriptions = append(newDescriptions, newDescription)
	}

	var currExperience models.Experiences
	if err := database.DB.FirstOrCreate(&currExperience, "id = ?", body.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	currExperience.Skills = newSkills
	currExperience.Descriptions = newDescriptions
	if err := database.DB.Save(&currExperience).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetExperiences(ctx *gin.Context) {
	var experiences []models.Experiences
	GetTableByModel(ctx, &experiences, "Skills", "Descriptions")
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
	GetTableByModelStatusON(ctx, &experiences, "Skills")

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
