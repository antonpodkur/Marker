package books

const (
    insertNewBook = `INSERT INTO books ( author, title, content ) VALUES ($1, $2, $3) RETURNING *`
)
