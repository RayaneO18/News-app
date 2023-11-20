import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Bookmarks.module.css";

export default function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value.favorites);
  console.log("bkmrks", bookmarks);

  const handleBookmark = (bookmark) => {
    console.log("Bookmark added:", bookmark);
  };

  const handleRemoveBookmark = (bookmark) => {
    console.log("Bookmark removed:", bookmark.title);
  };

  return (
    <div>
      <Header
        onSearch={(searchValue) =>
          console.log("Search in Bookmarks:", searchValue)
        }
      />

      {bookmarks.map((bookmark) => (
        <div key={bookmark.title}>
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
                onClick={() => handleRemoveBookmark(bookmark)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
