package user

import (
	"encoding/json"
	"os"
	"path"
)

var (
	configFile = path.Join("./config", "user-config.json")

)

type UserConfig struct {
	FirstLaunch bool `json:"firstLaunch"`
	Folder string `json:"folder"`
}

func NewUserConfig () (*UserConfig, error) {
	configFile := path.Join("./config", "user-config.json")

	if _, err := os.Stat(configFile); os.IsNotExist(err) {
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

	err = os.WriteFile(configFile, newConfigJson, 0644)
	if err != nil {
		return err
	}
	return nil
}
