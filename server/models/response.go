package models

type LinksResponse struct {
	ID   string `json:"id" gorm:"primaryKey"`
	Link string `json:"link" validate:"required"`
	Type string `json:"type" validate:"required"`
}
