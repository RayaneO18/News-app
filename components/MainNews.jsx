import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/MainNews.module.css";

export default function MainNews(props) {
  const {
    title,
    description,
    urlToImage,
    publishedAt,
    source,
    updateBookmarks,
    isBookmark,
  } = props;

  console.log("maincarddata", props);

  let bookmarkStyle = { cursor: "pointer" };
  const handleBookmark = () => {
    updateBookmarks(title, description, urlToImage, publishedAt, source);
  };
  if (isBookmark) {
    bookmarkStyle = { color: "orange", cursor: "pointer" };
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={urlToImage} alt="Poster" />
      <div className={styles.textContainer}>
        <span className={styles.name}>{title}</span>
        <p className={styles.description}>{description}</p>
        <div>
          <FontAwesomeIcon
            icon={faBookmark}
            onClick={() => handleBookmark()}
            style={bookmarkStyle}
          />
        </div>
      </div>
    </div>
  );
}
