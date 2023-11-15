import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Movie.module.css";

export default function News(props) {
  const {
    title,
    description,
    urlToImage,
    publishedAt,
    source,
    updateBookmarks,
    isBookmark,
  } = props;

  console.log(props);

  //   let bookmarkStyle = { cursor: "pointer" };
  //   const handleBookmark = () => {
  //     updateBookmarks(title,description, urlToImage, publishedAt, source);
  //   };
  if (isBookmark) {
    bookmarkStyle = { color: "orange", cursor: "pointer" };
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={poster} alt="Poster" />
      <div className={styles.textContainer}>
        <span className={styles.name}>{title}</span>
        <p className={styles.description}>{overview}</p>
        <span className={styles.vote}>
          {stars} ({voteCount})
        </span>
        <div className={styles.vote}>
          {personalStars} ({personalNote})
        </div>
        <div>
          <FontAwesomeIcon
            icon={faBookmark}
            onClick={() => handleHeart()}
            style={heartStyle}
          />
        </div>
      </div>
    </div>
  );
}
