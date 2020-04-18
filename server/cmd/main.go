package main

import (
	"github.com/CheapeOne/chrss/server/internal/database"
	"github.com/CheapeOne/chrss/server/internal/feeds"
	"github.com/CheapeOne/chrss/server/internal/users"
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()

	db, err := database.Connect()
	if err != nil {
		panic(err)
	}

	e.POST("/feeds", feeds.CreateFeedHandler(db))
	e.POST("/signup", users.SignupHandler(db))
	e.POST("/login", users.LoginHandler(db))

	e.Logger.Fatal(e.Start(":1323"))
}
