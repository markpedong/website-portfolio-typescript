package database

import (
	"fmt"
	"log"
	"os"
	"portfolio/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

var DB *gorm.DB

func DBSetup() {
	var err error
	fmt.Println("@@@@@@@@@" + os.Getenv("DB_DSN_LOCAL"))
	DB, err = gorm.Open(postgres.Open(os.Getenv("DB_DSN_LOCAL")),
		&gorm.Config{
			NamingStrategy: schema.NamingStrategy{SingularTable: true},
		})
	if err != nil {
		log.Fatal(err.Error())
		return
	}

	err = DB.AutoMigrate(&models.Users{})
	if err != nil {
		log.Fatal(err.Error())
		return
	}

	fmt.Println("--------------------Connected to Database---------------------")
}
