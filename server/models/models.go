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
	CreatedAt   int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt   soft_delete.DeletedAt `json:"-"`
}

type Links struct {
	ID        string                `json:"id" gorm:"primaryKey"`
	Link      string                `json:"link" validate:"required"`
	Type      string                `json:"type" validate:"required"`
	CreatedAt int                   `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt int                   `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt soft_delete.DeletedAt `json:"-"`
}

type Services struct {
	ID          string                `json:"id" gorm:"primaryKey"`
	Title       string                `json:"title"`
	Description string                `json:"description"`
	Logo        string                `json:"logo"`
	CreatedAt   int64                 `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   int64                 `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt   soft_delete.DeletedAt `json:"-"`
}

type Messages struct {
	ID        string                `json:"id" gorm:"primaryKey"`
	Name      string                `json:"name"`
	Email     string                `json:"email"`
	Message   string                `json:"message"`
	CreatedAt int64                 `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt int64                 `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt soft_delete.DeletedAt `json:"-"`
}

type Portfolios struct {
	ID        string                `json:"id" gorm:"primaryKey"`
	Title     string                `json:"title"  validate:"required"`
	Tech      pq.StringArray        `json:"tech" gorm:"type:text[]" validate:"required"`
	Link      string                `json:"link" validate:"required"`
	Image     string                `json:"image" validate:"required"`
	CreatedAt int64                 `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt int64                 `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt soft_delete.DeletedAt `json:"-"`
}

type Blogs struct {
	BlogsPayload
	ID        string                `json:"id" gorm:"primaryKey"`
	CreatedAt int64                 `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt int64                 `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt soft_delete.DeletedAt `json:"-"`
}

type Education struct {
	ID          string                `json:"id" gorm:"primaryKey"`
	School      string                `json:"school" validate:"required"`
	Course      string                `json:"course" validate:"required"`
	Started     string                `json:"started" validate:"required"`
	Ended       string                `json:"ended" validate:"required"`
	Description string                `json:"description" validate:"required"`
	Skills      []Skills              `json:"skills"`
	CreatedAt   int64                 `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   int64                 `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt   soft_delete.DeletedAt `json:"-"`
}

type Skills struct {
	ID           string                `json:"id" gorm:"primaryKey"`
	EducationID  string                `json:"education_id" validate:"required"`
	ExperienceID string                `json:"experience_id" validate:"required"`
	Name         string                `json:"name" validate:"required"`
	Percentage   int                   `json:"percentage" validate:"required"`
	CreatedAt    int64                 `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt    int64                 `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt    soft_delete.DeletedAt `json:"-"`
}

type Experiences struct {
	ID        string                `json:"id" gorm:"primaryKey"`
	Company   string                `json:"company"  validate:"required"`
	Title     string                `json:"title" validate:"required"`
	Location  string                `json:"location" validate:"required"`
	Started   string                `json:"started" validate:"required"`
	Ended     string                `json:"ended" validate:"required"`
	Skills    []Skills              `json:"skills" gorm:"foreignKey:ExperienceID"`
	CreatedAt int64                 `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt int64                 `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt soft_delete.DeletedAt `json:"-"`
}

type Testimonials struct {
	ID          string                `json:"id" gorm:"primaryKey"`
	Author      string                `json:"author" validate:"required"`
	Description string                `json:"description" validate:"required"`
	Image       string                `json:"image"`
	Job         string                `json:"job"`
	CreatedAt   int64                 `json:"created_at" gorm:"autoCreateTime"`
	UpdatedAt   int64                 `json:"updated_at" gorm:"autoUpdateTime"`
	DeletedAt   soft_delete.DeletedAt `json:"-"`
}
