import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import News from "./News";

export default function Home() {
  const [bookmark, setBookmark] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=9fb8d4d606404879ab28d38b4cf2dbb2"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const formattedData = data.articles.map((news) => {
          return {
            title: news.title,
            description: news.description,
            urlToImage: news.urlToImage,
            publishedAt: news.publishedAt,
            source: news.source,
          };
        });
        setNewsData(formattedData);
      });
  }, []);
  const news = newsData.map((item, i) => {
    return <News key={i} {...item} />;
  });

  return <>{news}</>;
}
