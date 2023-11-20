import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
export default function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  console.log("bkmrks", bookmarks);
  const isBookmarked = bookmarks.find((item) => item.id === el.id);
  return (
    <div>
      {bookmarks.map((bookmark) => (
        <div>
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
