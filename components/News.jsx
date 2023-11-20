import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/News.module.css";
import { useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "@/reducers/bookmarks";

export default function News(props) {
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
      </div>
      <div className={styles.iconContainer}>
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
  );
}
