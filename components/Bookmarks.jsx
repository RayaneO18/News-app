import React from "react";
import { useSelector } from "react-redux";

export default function Bookmarks() {
  const bookmarks = useSelector((state) => state.bookmarks.value);
  console.log("bkmrks", bookmarks);
  return <div>{bookmarks}</div>;
}
