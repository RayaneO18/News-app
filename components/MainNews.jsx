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

  return (
    <div className={styles.card}>
      <img className={styles.image} src={urlToImage} alt="Poster" />
      <div className={styles.textContainer}>
        <span className={styles.name}>{title}</span>
        <p className={styles.description}>{description}</p>
        <div>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
    </div>
  );
}
