package config

import (
	"os"
	"path/filepath"
)

const (
	folderName = "Marker"
)

func CheckConfigFolderExistance() error {
	configFolder, err := os.UserConfigDir()	
	if err != nil {
		return err
	}

	path := filepath.Join(configFolder, folderName)

	if _, err = os.Stat(path); os.IsNotExist(err) {
		err = os.Mkdir(path, 0700)
		if err != nil {
			return err
		}
	}

	return nil
}

func GetConfigFolder() (*string, error) {
	configFolder, err := os.UserConfigDir()	
	if err != nil {
		return nil, err
	}

	path := filepath.Join(configFolder, folderName)
	return &path, nil
}
