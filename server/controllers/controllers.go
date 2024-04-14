package controllers

import (
	"net/http"
	"portfolio/cloudinary"
	"portfolio/database"
	"portfolio/helpers"

	"github.com/cloudinary/cloudinary-go/v2/api/uploader"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func UploadImage(ctx *gin.Context) {
	form, err := ctx.FormFile("file")

	if err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusBadRequest, err.Error())
		return
	}

	uploadResult, err := cloudinary.CloudinaryService.Upload.Upload(ctx, form, uploader.UploadParams{Folder: "portfolio"})
	if err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	imageRes := map[string]interface{}{
		"url":      uploadResult.URL,
		"fileName": uploadResult.OriginalFilename,
		"size":     uploadResult.Bytes,
	}

	helpers.JSONResponse(ctx, "upload successful!", helpers.DataHelper(imageRes))
}

func GetTableByModel(ctx *gin.Context, model interface{}, preload ...string) {
	query := database.DB.Order("created_at DESC")

	if len(preload) > 0 {
		for _, p := range preload {
			query = query.Preload(p)
		}
	}

	if err := query.Find(model).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "", helpers.DataHelper(model))
}

func ToggleModelStatus(ctx *gin.Context, model interface{}) {
	var body struct {
		ID string `json:"id" validate:"required"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	if err := database.DB.First(model, "id = ?", body.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	updateFields := map[string]interface{}{"status": gorm.Expr("1 - status")}
	if err := database.DB.Model(model).Where("id = ?", body.ID).Updates(updateFields).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}

func DeleteModelByID(ctx *gin.Context, model interface{}) {
	var body struct {
		ID string `json:"id"`
	}
	if err := helpers.BindValidateJSON(ctx, &body); err != nil {
		return
	}

	if err := database.DB.Delete(model, "id = ?", body.ID).Error; err != nil {
		helpers.ErrJSONResponse(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	helpers.JSONResponse(ctx, "")
}
