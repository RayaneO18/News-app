// Header.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Popover, Input } from "antd";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const popoverContent = <div></div>;

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchValue);
  };

  return (
    <div className={styles.header}>
      <img className={styles.logo} src="logo.png" alt="" />
      <div className={styles.searchContainer}>
        <Input
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className={styles.searchIcon}
          onClick={handleSearchSubmit}
        />
      </div>
      <div>
        <Popover
          title="Liked news"
          content={popoverContent}
          className={styles.popover}
          trigger="click"
        >
          <Link href="/bookmarks" legacyBehavior>
            <a>
              <FontAwesomeIcon icon={faBookmark} className={styles.iconLink} />
            </a>
          </Link>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
