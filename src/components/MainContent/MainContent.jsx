import React, { Component } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import styles from "./MainContent.module.css";

class MainContent extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default MainContent;
