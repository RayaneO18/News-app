// MainNews.jsx
import styles from "@/styles/MainNews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function MainNews(props) {
  const {
    title,
    description,
    urlToImage,
    publishedAt,
    source,
    updateBookmarks,
    isBookmark,
  } = props;

  console.log("mainCardData", props);

  return (
    <div className={styles.card}>
      <img className={styles.image} src={urlToImage} alt="Poster" />
      <div className={styles.textContainer}>
        <span className={styles.name}>{title}</span>
        <p className={styles.description}>{description}</p>
        <div className={styles.iconFav}>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
    </div>
  );
}
