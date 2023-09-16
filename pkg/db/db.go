package db

import "database/sql"

func ConnectDatabase() (*sql.DB, error) {
    db, err := sql.Open("sqlite3", "./marker.db")
    if err != nil {
        return nil, err
    }

    return db, nil
}
