package models

import (
	"github.com/lib/pq"
	"gorm.io/plugin/soft_delete"
)

type Users struct {
	ID          string                `json:"id" gorm:"primaryKey"`
	FirstName   string                `json:"first_name" validate:"required"`
	LastName    string                `json:"last_name" validate:"required"`
	Phone       string                `json:"phone" validate:"required"`
	Address     string                `json:"address" validate:"required"`
	Description string                `json:"description" validate:"required"`
	Email       string                `json:"email" validate:"required"`
	Username    string                `json:"username"`
	Password    string                `json:"password"`
	CreatedAt   int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt   soft_delete.DeletedAt `json:"-"`
}

type Links struct {
	ID        string                `json:"id" gorm:"primaryKey"`
	Link      string                `json:"link" validate:"required"`
	Type      string                `json:"type" validate:"required"`
	Status    int                   `json:"status" gorm:"default:0"`
	CreatedAt int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt soft_delete.DeletedAt `json:"-"`
}

type Services struct {
	ID          string                `json:"id" gorm:"primaryKey"`
	Title       string                `json:"title"`
	Description string                `json:"description"`
	Logo        string                `json:"logo"`
	Status      int                   `json:"status" gorm:"default:0"`
	CreatedAt   int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt   soft_delete.DeletedAt `json:"-"`
}

type Messages struct {
	ID        string `json:"id" gorm:"primaryKey"`
	Name      string `json:"name"`
	Email     string `json:"email"`
	Message   string `json:"message"`
	CreatedAt int64  `json:"created_at" gorm:"autoCreateTime"`
}

type Portfolios struct {
	ID        string                `json:"id" gorm:"primaryKey"`
	Title     string                `json:"title"  validate:"required"`
	Tech      pq.StringArray        `json:"tech" gorm:"type:text[]" validate:"required"`
	Link      string                `json:"link" validate:"required"`
	Image     string                `json:"image" validate:"required"`
	Status    int                   `json:"status" validate:"required" gorm:"default:0"`
	CreatedAt int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt soft_delete.DeletedAt `json:"-"`
}

type Blogs struct {
	ID          string                `json:"id" gorm:"primaryKey"`
	Title       string                `json:"title"  validate:"required"`
	Date        string                `json:"date" validate:"required"`
	Description string                `json:"description" validate:"required"`
	Link        string                `json:"link" validate:"required"`
	Image       string                `json:"image" validate:"required"`
	Status      int                   `json:"status" validate:"required" gorm:"default:0"`
	CreatedAt   int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt   soft_delete.DeletedAt `json:"-"`
}

type EduSkill struct {
	ID          string `json:"id" gorm:"primaryKey"`
	EducationID string `json:"education_id"`
	Name        string `json:"name"`
	Percentage  int    `json:"percentage"`
}

type Education struct {
	ID          string                `json:"id" gorm:"primaryKey"`
	School      string                `json:"school" validate:"required"`
	Course      string                `json:"course" validate:"required"`
	Started     string                `json:"started" validate:"required"`
	Ended       string                `json:"ended" validate:"required"`
	Description string                `json:"description" validate:"required"`
	Skills      []EduSkill            `json:"skills"  gorm:"foreignKey:EducationID"`
	Status      int                   `json:"status" gorm:"default:0"`
	CreatedAt   int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt   soft_delete.DeletedAt `json:"-"`
}

type ExpSkill struct {
	ID           string `json:"id" gorm:"primaryKey"`
	ExperienceID string `json:"experience_id"`
	Name         string `json:"name"`
	Percentage   int    `json:"percentage"`
}

type ExpDesc struct {
	ID           string `json:"id" gorm:"primaryKey"`
	ExperienceID string `json:"experience_id"`
	Description  string `json:"description"`
}
type Experiences struct {
	ID           string                `json:"id" gorm:"primaryKey" validate:"required"`
	Company      string                `json:"company"  validate:"required"`
	Title        string                `json:"title" validate:"required"`
	Location     string                `json:"location" validate:"required"`
	Started      string                `json:"started" validate:"required"`
	Ended        string                `json:"ended" validate:"required"`
	Skills       []ExpSkill            `json:"skills" gorm:"foreignKey:ExperienceID"`
	Descriptions []ExpDesc             `json:"descriptions" gorm:"foreignKey:ExperienceID"`
	Status       int                   `json:"status" validate:"required" gorm:"default:0"`
	CreatedAt    int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt    int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt    soft_delete.DeletedAt `json:"-"`
}

type Testimonials struct {
	ID          string                `json:"id" gorm:"primaryKey"`
	Author      string                `json:"author" validate:"required"`
	Description string                `json:"description" validate:"required"`
	Image       string                `json:"image"`
	Job         string                `json:"job"`
	Status      int                   `json:"status" gorm:"default:0"`
	CreatedAt   int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt   soft_delete.DeletedAt `json:"-"`
}

type Color struct {
	ID        string `json:"id" gorm:"primaryKey"`
	Theme     string `json:"theme"`
	Title     string `json:"title"`
	Color     string `json:"color"`
	WebsiteID string `json:"website_id"`
}

type Website struct {
	ID     string  `json:"id" gorm:"primaryKey"`
	Status int     `json:"status" gorm:"default:0"`
	Colors []Color `json:"colors" gorm:"foreignKey:WebsiteID"`
}
