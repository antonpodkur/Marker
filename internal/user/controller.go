package user

type userController struct {
	userConfig UserConfig 
}

func NewUserController() (*userController, error) {
	userConfig, err := NewUserConfig()
	if err != nil {
		return nil, err
	}
	return &userController{userConfig: *userConfig}, nil
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




