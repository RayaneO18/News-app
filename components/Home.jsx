import "antd/dist/antd.css";
import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Popover, Button } from "antd";
import News from "./News-app";

export default function Home() {
  const [bookmark, setBookmark] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=9fb8d4d606404879ab28d38b4cf2dbb2"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const formatedData = data.results.map((new)=> {
          return {
    title: new.title,
   description: new.description,
   urlToImage: new.urlToImage,
   publishedAt: new.publishedAt,
   source: new.source,
          };
        });
        setNewsData(formatedData);
      });
  }, []);