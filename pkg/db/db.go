package db

import (
	"marker/pkg/config"
	"os"
	"path/filepath"
	"time"

	"github.com/jmoiron/sqlx"
	"github.com/labstack/gommon/log"
)

const (
	maxOpenConns    = 60
	connMaxLifetime = 120
	maxIdleConns    = 30
	connMaxIdleTime = 20
)

func ConnectDatabase() (*sqlx.DB, error) {
	configPath, err := config.GetConfigFolder()
	if err != nil {
		return nil, err
	}

	filePath := filepath.Join(*configPath, "marker.db") 

	_, err = os.Stat(filePath)

	if os.IsNotExist(err) {
		file, err := os.Create(filePath)
		if err != nil {
			return nil, err
		}
		defer file.Close()
	} else if err != nil {
		return nil, err
	}

	log.Print("Marker.db exists")


	db, err := sqlx.Connect("sqlite3", filePath)
	if err != nil {
		return nil, err
	}

	db.SetMaxOpenConns(maxOpenConns)
	db.SetConnMaxLifetime(connMaxLifetime * time.Second)
	db.SetMaxIdleConns(maxIdleConns)
	db.SetConnMaxIdleTime(connMaxIdleTime * time.Second)
	if err = db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}

func EnshureDatabaseExist(db *sqlx.DB) error {
	_, err := db.Exec(createTables)
	return err
}
