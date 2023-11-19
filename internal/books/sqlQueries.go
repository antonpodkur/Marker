package books

const (
    insertNewBook = `INSERT INTO books ( author, title, content ) VALUES ($1, $2, $3) RETURNING *`
    selectAllBooks = `SELECT * FROM books`
    selectBookById = `SELECT * FROM books WHERE id = $1 LIMIT 1`
    updateBook = `UPDATE books SET author=?, title=?, content=? WHERE id=?`
)
