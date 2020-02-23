package main

import (
	"encoding/xml"
	"fmt"
	"github.com/CheapeOne/chrss/server/database"
	"log"
	"net/http"
)

// Enclosure :
type Enclosure struct {
	URL    string `xml:"url,attr"`
	Length int64  `xml:"length,attr"`
	Type   string `xml:"type,attr"`
}

// Post :
type Post struct {
	Title     string    `xml:"title"`
	Link      string    `xml:"link"`
	Desc      string    `xml:"description"`
	GUID      string    `xml:"guid"`
	Enclosure Enclosure `xml:"enclosure"`
	PubDate   string    `xml:"pubDate"`
}

// Feed :
type Feed struct {
	Title       string `xml:"title"`
	Link        string `xml:"link"`
	Description string `xml:"description"`
	Posts       []Post `xml:"item"`
}

// Rss :
type Rss struct {
	Feed Feed `xml:"channel"`
}

var feedUrls = []string{
	"https://news.vuejs.org/feed.xml",
	"http://feeds.feedburner.com/PoorlyDrawnLines?format=xml",
	"https://xkcd.com/atom.xml",
	"https://webcomicname.com/rss",
}

func main() {

	for _, feedUrl := range feedUrls {
		feed := fetchFeed(feedUrl)

	}

	db, err := database.Connect()
}

func fetchFeed(feedUrl string) *Feed {
	resp, err := http.Get("https://news.vuejs.org/feed.xml")
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

	fmt.Printf("Channel title: %v\n", rss.Feed.Title)
	fmt.Printf("Channel link: %v\n", rss.Feed.Link)

	return &rss.Feed
}

func storePost() {

}
