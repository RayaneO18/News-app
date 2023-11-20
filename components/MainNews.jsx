// MainNews.jsx
import React from "react";
import styles from "@/styles/MainNews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "@/reducers/bookmarks";
import { useState } from "react";

export default function MainNews(props) {
  const dispatch = useDispatch();
  let { title, description, urlToImage, publishedAt, source, updateBookmarks } =
    props;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = () => {
    dispatch(addBookmark(props));
  };
  const handleRemoveBookmark = () => {
    dispatch(removeBookmark(props.title));
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={urlToImage} alt="Poster" />
      <div className={styles.textContainer}>
        <span className={styles.name}>{title}</span>
        <p className={styles.description}>{description}</p>
        <div className={styles.iconFav}>
          {isBookmarked ? (
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                setIsBookmarked(!isBookmarked);
                handleRemoveBookmark();
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBookmark}
              onClick={() => {
                setIsBookmarked(!isBookmarked);
                handleBookmark();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
