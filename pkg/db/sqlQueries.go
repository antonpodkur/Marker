package db

const (
	createTables = `
		CREATE TABLE IF NOT EXISTS books (
		    id INTEGER PRIMARY KEY AUTOINCREMENT,
		    author TEXT NOT NULL,
		    title TEXT NOT NULL,
		    content TEXT NOT NULL
		)
`
)
