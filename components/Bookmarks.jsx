// Bookmarks.jsx
import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  console.log("bkmrks", bookmarks);

  return (
    <div>
      <Header
        onSearch={(searchValue) =>
          console.log("Search in Bookmarks:", searchValue)
        }
      />

      {bookmarks.map((bookmark) => (
        <div key={bookmark.id}>
          <img src={bookmark.urlToImage} alt="Poster" />
          <span>{bookmark.title}</span>
          <p>{bookmark.description}</p>
          <div>
            <FontAwesomeIcon
              icon={faBookmark}
              onClick={() =>
                isBookmarked ? handleRemoveBookmark() : handleBookmark()
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
