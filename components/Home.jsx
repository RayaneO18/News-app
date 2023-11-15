import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import News from "./News";
import MainNews from "./MainNews";

export default function Home() {
  const [bookmark, setBookmark] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [mainNews, setMainNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=9fb8d4d606404879ab28d38b4cf2dbb2"
    )
      .then((res) => res.json())
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
        setMainNews(formattedData.slice(0, 1));
        setNewsData(formattedData.slice(1));
      });
  }, []);
  const mainNewsCard = mainNews.map((el, i) => {
    return <MainNews key={i} {...el} />;
  });
  const news = newsData.map((item, i) => {
    return <News key={i} {...item} />;
  });

  return (
    <>
      {mainNewsCard}
      {news}
    </>
  );
}
