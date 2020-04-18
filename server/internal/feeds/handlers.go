package feeds

import (
	"net/http"

	"github.com/jmoiron/sqlx"
	"github.com/labstack/echo"
)

func CreateFeedHandler(db *sqlx.DB) echo.HandlerFunc {
	return func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	}
}
