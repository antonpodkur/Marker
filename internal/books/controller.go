package books 

import (
	"encoding/json"
	"fmt"
	"os"
)

type BookController struct {}

func NewBookController() *BookController {
    return &BookController{
}

func (b *BookController) SaveBook(book Book) error {
    data, err := json.Marshal(book);
    if err != nil {
        return err
    }

    docsPath := "/Users/antonpodkur/Documents/Marker"
    
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
