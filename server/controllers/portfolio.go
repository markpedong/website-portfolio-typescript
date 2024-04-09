package controllers

import (
	"net/http"
	"portfolio/database"
	"portfolio/helpers"
	"portfolio/models"

	"github.com/gin-gonic/gin"
)

func AddPortfolios(ctx *gin.Context) {
	var body struct {
		Title string   `json:"title"`
		Tech  []string `json:"tech"`
		Link  string   `json:"link"`
		Image string   `json:"image"`
	}

	newPortfolio := models.Portfolios{
		ID:    helpers.NewUUID(),
		Title: body.Title,
		Tech:  body.Tech,
		Link:  body.Link,
		Image: body.Image,
	}
	if err := database.DB.Create(&newPortfolio).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func GetPortfolios(ctx *gin.Context) {
	var portfolios []models.Portfolios
	if err := database.DB.Find(&portfolios).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(portfolios))
}

func UpdatePortfolios(ctx *gin.Context) {
	var portfolio struct {
		ID    string   `json:"id"`
		Title string   `json:"title"  validate:"required"`
		Tech  []string `json:"tech" validate:"required"`
		Link  string   `json:"link" validate:"required"`
		Image string   `json:"image" validate:"required"`
	}
	if err := helpers.BindValidateJSON(ctx, &portfolio); err != nil {
		return
	}

	var currPortfolio models.Portfolios
	if err := database.DB.First(&currPortfolio, "id = ?", portfolio.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	if err := database.DB.Model(&currPortfolio).Updates(portfolio).Save(&currPortfolio).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func DeletePortfolios(ctx *gin.Context) {
	var body struct {
		ID string `json:"id"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	var currPortfolio models.Portfolios
	if err := database.DB.First(&currPortfolio, "id = ?", body.ID).Delete(&currPortfolio).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}