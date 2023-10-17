package books

import (
	"encoding/json"
	"errors"
	"fmt"
	"marker/internal/user"
	"os"
)

type BookController struct {
    bookRepository *BookRepository 
}

func NewBookController( bookRepository *BookRepository ) *BookController {
    return &BookController{ 
        bookRepository: bookRepository,
    }
}

func (b *BookController) SaveBook(book Book) error {
    data, err := json.Marshal(book);
    if err != nil {
        return err
    }

    _, err = b.bookRepository.Create(&book)
    if err != nil {
        return err
    }

    userConfig, err := user.NewUserConfig()
    if err != nil {
        return err
    }
    if userConfig.Folder == "" {
        return errors.New("folder is not selected")
    }

    docsPath := userConfig.Folder
    
    if _, err = os.Stat(docsPath); os.IsNotExist(err) {
        err = os.Mkdir(docsPath, 0755)
        if err != nil {
            return err
        }
    }

    filePath := docsPath + fmt.Sprintf("/%s.json", book.Title) 
    err = os.WriteFile(filePath, data, 0644)
    if err != nil {
        return err
    }

    return nil
}
