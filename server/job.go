package main

import (
	"encoding/xml"
	"fmt"
	"log"
	"net/http"

	"github.com/CheapeOne/chrss/server/database"
)

// Enclosure :
type Enclosure struct {
	URL    string `xml:"url,attr"`
	Length int64  `xml:"length,attr"`
	Type   string `xml:"type,attr"`
}

// Post :
type Post struct {
	Title       string    `xml:"title"`
	Url         string    `xml:"link"`
	Description string    `xml:"description"`
	GUID        string    `xml:"guid"`
	Enclosure   Enclosure `xml:"enclosure"`
	PubDate     string    `xml:"pubDate"`
}

// Feed :
type Feed struct {
	Id          int
	Title       string  `xml:"title"`
	RssUrl      string  `xml:"link"`
	Description *string `xml:"description"`
	Posts       []Post  `xml:"item"`
}

// Rss :
type Rss struct {
	Feed Feed `xml:"channel"`
}

func main() {
	allFeeds := selectDBFeeds()

	fmt.Printf("Found %d feeds in DB \n\n", len(allFeeds))

	for _, feed := range allFeeds {

		fmt.Printf("Fetching xml for feed %s ... \n", feed.RssUrl)
		feedXML := fetchFeedXML(feed.RssUrl)
		posts := feedXML.Posts

		fmt.Println("Processing posts ...")

		numAdded := 0
		for _, post := range posts {
			successful := tryInsertPost(feed, post)
			if successful {
				numAdded++
			}
		}

		numSkipped := len(posts) - numAdded
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

func fetchFeedXML(feedUrl string) *Feed {
	resp, err := http.Get(feedUrl)
	if err != nil {
		log.Fatalln(err)
	}

	defer resp.Body.Close()

	rss := Rss{}
	decoder := xml.NewDecoder(resp.Body)
	err = decoder.Decode(&rss)
	if err != nil {
		fmt.Printf("Error Decode: %v\n", err)
		return nil
	}

	return &rss.Feed
}

func tryInsertPost(feed Feed, post Post) bool {
	db, _ := database.Connect()
	query := `INSERT INTO posts (title, description, url, guid, feed_id) VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING`

	result, err := db.Exec(
		query,
		post.Title,
		post.Description,
		post.Url,
		post.GUID,
		feed.Id,
	)
	if err != nil {
		panic(err)
	}

	rows, _ := result.RowsAffected()
	return rows == 1
}
