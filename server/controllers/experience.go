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

	tx := database.DB.Begin()
	defer func() {
		if r := recover(); r != nil {
			tx.Rollback()
		}
	}()

	for _, v := range body.Skills {
		skill := models.ExpSkill{
			ExperienceID: body.ID,
			Name:         v.Name,
			Percentage:   v.Percentage,
		}

		if v.ID != "" {
			if err := tx.Model(&models.ExpSkill{}).Where("id = ?", v.ID).Updates(&skill).Error; err != nil {
				tx.Rollback()
				helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, "Failed to update skill")
				return
			}
		} else {
			skill.ID = helpers.NewUUID()
			if err := tx.Create(&skill).Error; err != nil {
				tx.Rollback()
				helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, "Failed to create skill")
				return
			}
		}
	}

	if err := tx.Save(&body).Error; err != nil {
		tx.Rollback()
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, "Failed to update experience")
		return
	}

	if err := tx.Commit().Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, "Failed to commit transaction")
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
