package database

import (
	"os"

	_ "github.com/jackc/pgx/stdlib"
	"github.com/jmoiron/sqlx"
)

var db *sqlx.DB

var (
	host     = "localhost"
	port     = 5432
	dbname   = "postgres"
	user     = os.Getenv("POSTGRES_USER")
	password = os.Getenv("POSTGRES_PASSWORD")
)

func Connect() (*sqlx.DB, error) {
	if db != nil {
		return db, nil
	}

	db, err := sqlx.Connect("pgx", "postgres://postgres:postgrespassword@localhost:5432/postgres")
	if err != nil {
		panic(err)
	}

	return db, nil
}
