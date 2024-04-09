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
