package database

import "database/sql"

var db *sql.DB

func Connect() (*sql.DB, error) {
	if db != nil {
		return db, nil
	}

	db, err := sql.Open("postgres", "")
	if err != nil {
		return nil, err
	}

	return db, nil
}
