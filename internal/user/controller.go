package user

import (
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type userController struct {
	appContext *context.Context
	userConfig UserConfig 
}

func NewUserController(ctx *context.Context) (*userController, error) {
	userConfig, err := NewUserConfig()
	if err != nil {
		return nil, err
	}
	return &userController{
		appContext: ctx,
		userConfig: *userConfig,
	}, nil
}

func (c *userController) GetUserConfig() UserConfig {
	return c.userConfig
}

func (c *userController) UpdateUserConfig (newUserConfig UserConfig) error {
	err := WriteUserConfig(newUserConfig)
	if err != nil {
		return err
	}
	c.userConfig = newUserConfig
	return nil
}

func (c *userController) SelectFolder() (string, error) {
	dir, err := runtime.OpenDirectoryDialog(*c.appContext, runtime.OpenDialogOptions{})
	if err != nil {
		return "", err
	}
	newConfig := c.userConfig
	newConfig.Folder = dir
	err = c.UpdateUserConfig(newConfig)
	if err != nil {
		return "", err
	}
	return dir, nil
}




