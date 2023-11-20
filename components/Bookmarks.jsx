import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Bookmarks.module.css";

export default function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value.favorites);
  console.log("bkmrks", bookmarks);

  return (
    <div>
      {bookmarks.map((bookmark) => (
        <div>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={bookmark.urlToImage}
              alt="Poster"
            />
            <div className={styles.textContainer}>
              <span className={styles.name}>{bookmark.title}</span>
              <p className={styles.description}>{bookmark.description}</p>
            </div>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faBookmark}
                onClick={() =>
                  isBookmarked ? handleRemoveBookmark() : handleBookmark()
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
