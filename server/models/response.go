package models

type LinksResponse struct {
	ID   string `json:"id" gorm:"primaryKey"`
	Link string `json:"link" validate:"required"`
	Type string `json:"type" validate:"required"`
}

type ServicesResponse struct {
	ID          string `json:"id" gorm:"primaryKey"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Logo        string `json:"logo"`
}

type UsersResponse struct {
	ID          string `json:"id" gorm:"primaryKey"`
	FirstName   string `json:"first_name" validate:"required"`
	LastName    string `json:"last_name" validate:"required"`
	Phone       string `json:"phone" validate:"required"`
	Address     string `json:"address" validate:"required"`
	Description string `json:"description" validate:"required"`
	Email       string `json:"email" validate:"required"`
}
