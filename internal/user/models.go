package user

import (
	"encoding/json"
	"marker/pkg/config"
	"os"
	"path/filepath"
	"github.com/labstack/gommon/log"
)

type UserConfig struct {
	FirstLaunch bool `json:"firstLaunch"`
	Folder string `json:"folder"`
}

func NewUserConfig () (*UserConfig, error) {
	configPath, err := config.GetConfigFolder()
	if err != nil {
		return nil, err
	}

	configFolder := filepath.Join(*configPath, "config") 
	configFile := filepath.Join(configFolder, "user-config.json")

	_, err = os.Stat(configFolder)

	if os.IsNotExist(err) {
		err := os.MkdirAll(configFolder, 0755)
		if err != nil {
			return nil, err
		}
	} else if err != nil {
		return nil, err
	} else {
		log.Print("Folder already exists")
	}

	if _, err := os.Stat(configFile); os.IsNotExist(err) {
		log.Print("Config file does not exist")
		newConfig := UserConfig{
			FirstLaunch: true,
			Folder: "",
		}

		newConfigJson, err := json.MarshalIndent(newConfig, "", " ")
		if err != nil {
			return nil, err
		}

		err = os.WriteFile(configFile, newConfigJson, 0644)
		if err != nil {
			return nil, err
		}
		return &newConfig, nil
	}

	existingConfigJson, err := os.ReadFile(configFile)
	if err != nil {
		return nil, err
	}

	var existingConfig UserConfig
	err = json.Unmarshal(existingConfigJson, &existingConfig)
	if err != nil {
		return nil, err
	}
	return &existingConfig, nil
}

func WriteUserConfig (newConfig UserConfig) error {
	newConfigJson, err := json.MarshalIndent(newConfig, "", " ")
	if err != nil {
		return err
	}

	configPath, err := config.GetConfigFolder()
	if err != nil {
		return err
	}

	configFile := filepath.Join(*configPath, "config", "user-config.json") 

	err = os.WriteFile(configFile, newConfigJson, 0644)
	if err != nil {
		return err
	}
	return nil
}
