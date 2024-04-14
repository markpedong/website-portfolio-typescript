package models

type EduSkillPayload struct {
	Name       string `json:"name"`
	Percentage int    `json:"percentage"`
}

type EducationPayload struct {
	School      string            `json:"school" validate:"required"`
	Course      string            `json:"course" validate:"required"`
	Started     string            `json:"started" validate:"required"`
	Ended       string            `json:"ended" validate:"required"`
	Description string            `json:"description" validate:"required"`
	Skills      []EduSkillPayload `json:"skills"`
}

type ExpSkillPayload struct {
	Name       string `json:"name"`
	Percentage int    `json:"percentage"`
}

type ExperiencePayload struct {
	Company  string            `json:"company"  validate:"required"`
	Title    string            `json:"title" validate:"required"`
	Location string            `json:"location" validate:"required"`
	Started  string            `json:"started" validate:"required"`
	Ended    string            `json:"ended" validate:"required"`
	Skills   []ExpSkillPayload `json:"skills"`
}

type BlogsPayload struct {
	Title       string `json:"title"  validate:"required"`
	Date        string `json:"date" validate:"required"`
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
