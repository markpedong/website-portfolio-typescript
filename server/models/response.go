package models

type LinksResponse struct {
	ID   string `json:"id"`
	Link string `json:"link"`
	Type string `json:"type"`
}

type ExpSkillResponse struct {
	ID         string `json:"id"`
	Name       string `json:"name"`
	Percentage int    `json:"percentage"`
}

type ExperienceResponse struct {
	ID           string             `json:"id" `
	Company      string             `json:"company" `
	Title        string             `json:"title"`
	Location     string             `json:"location"`
	Started      string             `json:"started"`
	Ended        string             `json:"ended"`
	Skills       []ExpSkillResponse `json:"skills" `
	Descriptions []ExpDesc          `json:"descriptions"`
}

type EduSkillResponse struct {
	ID         string `json:"id"`
	Name       string `json:"name"`
	Percentage int    `json:"percentage"`
}

type EducationResponse struct {
	ID          string             `json:"id" `
	School      string             `json:"school"`
	Course      string             `json:"course"`
	Started     string             `json:"started"`
	Ended       string             `json:"ended"`
	Description string             `json:"description"`
	Skills      []EduSkillResponse `json:"skills" `
}

type ServicesResponse struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Logo        string `json:"logo"`
}

type UsersResponse struct {
	ID          string `json:"id"`
	FirstName   string `json:"first_name"`
	LastName    string `json:"last_name"`
	Phone       string `json:"phone"`
	Address     string `json:"address"`
	Description string `json:"description"`
	Email       string `json:"email"`
}

type PortfolioResponse struct {
	ID    string   `json:"id" `
	Title string   `json:"title" `
	Tech  []string `json:"tech" `
	Link  string   `json:"link"`
	Image string   `json:"image"`
}

type TestimonialResponse struct {
	ID          string `json:"id" `
	Author      string `json:"author"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Job         string `json:"job"`
}

type BlogsResponse struct {
	ID          string `json:"id" `
	Title       string `json:"title" `
	Date        string `json:"date"`
	Description string `json:"description"`
	Link        string `json:"link"`
	Image       string `json:"image"`
}
