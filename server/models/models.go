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