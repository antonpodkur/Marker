package books

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"marker/internal/user"
	"os"

	"github.com/raykov/gofpdf"
	"github.com/raykov/mdtopdf"
)

type BookController struct {
	bookRepository *BookRepository
}

func NewBookController(bookRepository *BookRepository) *BookController {
	return &BookController{
		bookRepository: bookRepository,
	}
}

func (b *BookController) SaveBook(book Book) error {
	_, err := b.bookRepository.Create(&book)
	if err != nil {
		return err
	}

	data, err := json.Marshal(book)
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

func (b *BookController) UpdateBook(book Book) error {
	err := b.bookRepository.Update(&book)
	if err != nil {
		return err
	}

	data, err := json.Marshal(book)
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

func (b *BookController) GetAllBooks() ([]Book, error) {
	books, err := b.bookRepository.GetAll()
	return *books, err
}

func (b *BookController) GetBookById(id int) (Book, error) {
	book, err := b.bookRepository.GetById(id)
	return *book, err
}

func (b *BookController) SavePdf(base64Image string) error {
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

	return nil
}

func (b *BookController) DeleteBookById(id int) error {
	err := b.bookRepository.Delete(id)
	return err
}

func (b *BookController) ExportBook(id int) error {
	book, err := b.bookRepository.GetById(id)
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

	filePath := docsPath + fmt.Sprintf("/%s.pdf", book.Title)

	pdf, err := os.OpenFile(filePath, os.O_WRONLY|os.O_TRUNC|os.O_CREATE, 0644)
	if err != nil {
		return err
	}
	defer pdf.Close()

	pageNumExtension := func(pdf *gofpdf.Fpdf) {
		pdf.SetFooterFunc(func() {
			left, _, right, bottom := pdf.GetMargins()
			width, height := pdf.GetPageSize()
			fontSize := 12.0

			pNum := fmt.Sprint(pdf.PageNo())
			pdf.SetXY(width-left/2-pdf.GetStringWidth(pNum), height-bottom/2)
			pdf.SetFontSize(fontSize)
			pdf.SetTextColor(200, 200, 200)
			pdf.SetFontStyle("B")
			pdf.SetRightMargin(0)
			pdf.Write(fontSize, pNum)
			pdf.SetRightMargin(right)
		})
	}

	reader := bytes.NewReader([]byte(book.Markdown))

	err = mdtopdf.Convert(reader, pdf, pageNumExtension)
	if err != nil {
		return err
	}
	return nil
}
