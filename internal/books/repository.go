package books

import (
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"
)

type BookRepository struct {
	db *sqlx.DB
}

func NewBookRepository(db *sqlx.DB) *BookRepository {
	return &BookRepository{
		db: db,
	}
}

func (r *BookRepository) Create(book *Book) (*Book, error) {
	var b Book

	if err := r.db.QueryRowx(
		insertNewBook,
		&book.Author,
		&book.Title,
		&book.Content,
	).StructScan(&b); err != nil {
		return nil, errors.Wrap(err, "booksRepo.Create.QueryRowx")
	}

	return &b, nil
}
