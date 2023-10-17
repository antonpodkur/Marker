package main

import (
	"embed"
	"marker/internal/books"
	"marker/internal/user"
	DB "marker/pkg/db"

	_ "github.com/mattn/go-sqlite3"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	db, err := DB.ConnectDatabase()
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = DB.EnshureDatabaseExist(db);
	if err != nil {
		panic(err)
	}

	bookRepository := books.NewBookRepository(db)
	bookController := books.NewBookController(bookRepository)
	userController, err := user.NewUserController(&app.ctx)

	if err != nil {
		panic(err)
	}

	// Create application with options
	err = wails.Run(&options.App{
		Title:  "Marker",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
			bookController,
			userController,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
