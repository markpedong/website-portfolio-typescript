package models

type EducationPayload struct {
	School      string         `json:"school" validate:"required"`
	Course      string         `json:"course" validate:"required"`
	Started     string         `json:"started" validate:"required"`
	Ended       string         `json:"ended" validate:"required"`
	Description string         `json:"description" validate:"required"`
	Skills      []SkillPayload `json:"skills"`
}

type SkillPayload struct {
	Name       string `json:"name" validate:"required"`
	Percentage int    `json:"percentage" validate:"required"`
}

type ExperiencePayload struct {
	Company  string   `json:"company"  validate:"required"`
	Title    string   `json:"title" validate:"required"`
	Location string   `json:"location" validate:"required"`
	Started  string   `json:"started" validate:"required"`
	Ended    string   `json:"ended" validate:"required"`
	Skills   []Skills `json:"skills" gorm:"foreignKey:ExperienceID"`
}

type BlogsPayload struct {
	Title       string `json:"title"  validate:"required"`
	Date        int    `json:"date" validate:"required"`
	Description string `json:"description" validate:"required"`
	Link        string `json:"link" validate:"required"`
	Image       string `json:"image" validate:"required"`
}

type TestimonialsPayload struct {
	Author      string `json:"author" validate:"required"`
	Description string `json:"description" validate:"required"`
	Image       string `json:"image"`
	Job         string `json:"job"`
}
