import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header>
      <a href="/" className={styles.Header}>
        HOME
      </a>
      <a href="/">COLLECTION</a>
      <a href="/">ABOUT</a>
      <a href="/">CONTACT</a>
    </header>
  );
};

export default Header;
