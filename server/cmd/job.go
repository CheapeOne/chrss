package main

import (
	"fmt"
	"log"
	"time"

	"github.com/CheapeOne/chrss/server/database"
	"github.com/mmcdole/gofeed"
)

// Feed :
type Feed struct {
	Id          int
	Title       string
	RssUrl      string
	Description *string
}

func main() {
	allFeeds := selectDBFeeds()

	fmt.Printf("Found %d feeds in DB \n\n", len(allFeeds))

	fp := gofeed.NewParser()

	for _, feed := range allFeeds {

		fmt.Printf("Fetching xml for feed %s ... \n", feed.RssUrl)

		feedXML, _ := fp.ParseURL(feed.RssUrl)
		// feedXML := fetchFeedXML(feed.RssUrl)
		postsXML := feedXML.Items

		fmt.Println("Processing posts ...")

		numAdded := 0
		for _, postXML := range postsXML {
			successful := tryInsertPost(feed, postXML)
			if successful {
				numAdded++
			}
		}

		numSkipped := len(postsXML) - numAdded
		fmt.Printf("Added %d posts, Skipped %d \n\n", numAdded, numSkipped)
	}
}

func selectDBFeeds() []Feed {
	db, _ := database.Connect()

	ff := []Feed{}
	err := db.Select(&ff, "SELECT id, title, rss_url AS rssurl, description FROM feeds")
	if err != nil {
		log.Fatalln(err)
	}

	return ff
}

func tryInsertPost(feed Feed, postXML *gofeed.Item) bool {
	db, _ := database.Connect()
	query := `
	INSERT INTO posts (
		title,
		description,
		url,
		guid,
		feed_id,
		image,
		published_at
	)
	VALUES (
		$1, $2, $3, $4, $5, $6, $7
	) ON CONFLICT DO NOTHING`

	var publishedAt time.Time
	if postXML.PublishedParsed != nil {
		publishedAt = postXML.PublishedParsed.UTC()
	}

	result, err := db.Exec(
		query,
		postXML.Title,
		postXML.Description,
		postXML.Link,
		postXML.GUID,
		feed.Id,
		postXML.Image,
		publishedAt,
	)
	if err != nil {
		panic(err)
	}

	rows, _ := result.RowsAffected()
	return rows == 1
}
