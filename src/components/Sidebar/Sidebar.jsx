import React, { Component } from "react";
import logo from "./../../assets/logo.png";
import styles from "./Sidebar.module.css";

class Sidebar extends Component {
  render() {
    return (
      <nav className={styles.main}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.tagline}>STYLISH TEXT OVER</div>
      </nav>
    );
  }
}

export default Sidebar;
