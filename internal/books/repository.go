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
	if err := r.db.QueryRowx(
		insertNewBook,
		&book.Author,
		&book.Title,
		&book.Content,
	).StructScan(book); err != nil {
		return nil, errors.Wrap(err, "booksRepo.Create.QueryRowx")
	}

	return book, nil
}

func (r *BookRepository) GetAll() (*[]Book, error) {
	var books []Book

	rows, err := r.db.Queryx(selectAllBooks)
	if err != nil {
		return nil, err
	}
	if rows.Err() != nil {
		return nil, rows.Err()
	}
	defer rows.Close()

	for rows.Next() {
		var b Book		
		err := rows.StructScan(&b)
		if err != nil {
			return nil, err
		}
		books = append(books, b)
	}

	return &books, nil
}
