import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/News.module.css";
import { useDispatch } from "react-redux";
import { addBookmark } from "@/reducers/bookmarks";

export default function News(props) {
  const dispatch = useDispatch();
  const {
    title,
    description,
    urlToImage,
    publishedAt,
    source,
    updateBookmarks,
    isBookmark,
  } = props;

  //console.log(props);

  const handleBookmark = () => {
    dispatch(addBookmark(props));
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={urlToImage} alt="Poster" />
      <div className={styles.textContainer}>
        <span className={styles.name}>{title}</span>
        <p className={styles.description}>{description}</p>
        <div>
          <FontAwesomeIcon icon={faBookmark} onClick={() => handleBookmark()} />
        </div>
      </div>
    </div>
  );
}
