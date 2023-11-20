// Home.jsx
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import News from "./News";
import MainNews from "./MainNews";
import { useSelector } from "react-redux";

export default function Home() {
  const [bookmark, setBookmark] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [mainNews, setMainNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const bookmarks = useSelector((state) => state.bookmarks.value);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=9fb8d4d606404879ab28d38b4cf2dbb2&q=${searchTerm}`
        );
        const data = await response.json();
        const formattedData = data.articles.map((news) => ({
          title: news.title,
          description: news.description,
          urlToImage: news.urlToImage,
          publishedAt: news.publishedAt,
          source: news.source,
        }));
        setMainNews(formattedData.slice(0, 1));
        setNewsData(formattedData.slice(1));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const mainNewsCard = mainNews.map((el, i) => <MainNews key={i} {...el} />);

  const news = newsData.map((item, i) => {
    const isBookmarked = bookmarks.find((el) => item.id === el.id);
    return <News isBookmarked={isBookmarked} key={i} {...item} />;
  });

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className={styles.mainNewsCard}>{mainNewsCard}</div>
      <div className={styles.newsContainer}>{news}</div>
    </>
  );
}
