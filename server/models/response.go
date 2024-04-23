package models

type LinksResponse struct {
	ID   string `json:"id" gorm:"primaryKey"`
	Link string `json:"link" validate:"required"`
	Type string `json:"type" validate:"required"`
}

type ExpSkillResponse struct {
	ID         string `json:"id" gorm:"primaryKey"`
	Name       string `json:"name"`
	Percentage int    `json:"percentage"`
}

type ExperienceResponse struct {
	ID       string             `json:"id" `
	Company  string             `json:"company" `
	Title    string             `json:"title"`
	Location string             `json:"location"`
	Started  string             `json:"started"`
	Ended    string             `json:"ended"`
	Skills   []ExpSkillResponse `json:"skills" `
}

type EduSkillResponse struct {
	ID         string `json:"id" gorm:"primaryKey"`
	Name       string `json:"name"`
	Percentage int    `json:"percentage"`
}

type EducationResponse struct {
	ID          string             `json:"id" `
	School      string             `json:"school" validate:"required"`
	Course      string             `json:"course" validate:"required"`
	Started     string             `json:"started" validate:"required"`
	Ended       string             `json:"ended" validate:"required"`
	Description string             `json:"description" validate:"required"`
	Skills      []EduSkillResponse `json:"skills" `
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
