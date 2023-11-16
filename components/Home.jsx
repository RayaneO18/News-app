import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import News from "./News";
import MainNews from "./MainNews";
import { Popover, Button } from "antd";
import Link from "next/link";

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
  const popoverContent = <div>1 news like</div>;
  return (
    <>
      <div className={styles.header}>
        <img className={styles.logo} src="logo.png" alt="" />
        <div>
          <Popover
            title="Liked news"
            content={popoverContent}
            className={styles.popover}
            trigger="click"
          >
            <Link href="/infos-aimer" legacyBehavior>
              <a>
                <FontAwesomeIcon
                  icon={faBookmark}
                  className={styles.iconLink}
                />
              </a>
            </Link>
          </Popover>
        </div>
      </div>
      {mainNewsCard}
      {news}
    </>
  );
}
