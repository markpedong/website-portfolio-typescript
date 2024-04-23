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
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
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
	GetTableByModel(ctx, &portfolios)
}

func UpdatePortfolios(ctx *gin.Context) {
	var portfolio struct {
		ID    string   `json:"id" validate:"required"`
		Title string   `json:"title" validate:"required"`
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

	currPortfolio.Title = portfolio.Title
	currPortfolio.Link = portfolio.Link
	currPortfolio.Image = portfolio.Image
	currPortfolio.Tech = portfolio.Tech

	if err := database.DB.Save(&currPortfolio).Error; err != nil {
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
	if err := database.DB.Delete(&currPortfolio, "id = ?", body.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func TogglePortfolioStatus(ctx *gin.Context) {
	var portfolio models.Portfolios
	ToggleModelStatus(ctx, &portfolio)
}

func PublicPortfolios(ctx *gin.Context) {
	var portfolios []models.Portfolios
	GetTableByModelStatusON(ctx, &portfolios)

	var portfolioResponse []models.PortfolioResponse
	for _, v := range portfolios {
		newPortfolioResponse := models.PortfolioResponse{
			ID:    v.ID,
			Link:  v.Link,
			Title: v.Title,
			Tech:  v.Tech,
			Image: v.Image,
		}

		portfolioResponse = append(portfolioResponse, newPortfolioResponse)
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(portfolioResponse))
}
