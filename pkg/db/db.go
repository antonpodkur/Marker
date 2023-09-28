package db

import (
	"time"

	"github.com/jmoiron/sqlx"
)

const (
	maxOpenConns    = 60
	connMaxLifetime = 120
	maxIdleConns    = 30
	connMaxIdleTime = 20
)

func ConnectDatabase() (*sqlx.DB, error) {
	db, err := sqlx.Connect("sqlite3", "./marker.db")
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
