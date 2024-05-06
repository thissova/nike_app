import React from "react";
import shoe from "./../../../assets/shoe.png";
import styles from "./Main.module.css";

const Main = (props) => {
  return (
    <main>
      <div className={styles.mainContent}>
        <div className={styles.title}>
          <p className={styles.heading}>AIR MAX</p>
          <p className={styles.detailedHeading}>NIKE AIR MAX 90</p>
        </div>
        <div className={styles.information}>
          <p className={styles.price}>$98</p>
          <p className={styles.detailes}>
            Nike Air Max is a line of shoes produced by Nike, Inc., with the
            first model released in 1987. Air Max shoes are identified by their
            midsoles incorporating flexible urethane pouches filled with
            pressurized gas, visible from the exterior of the shoe and intended
            to provide cushioning to the underfoot.
          </p>
        </div>
        <div>
          <button>ADD TO CART</button>
        </div>
      </div>
      <div className={styles.image}>
        <img src={shoe} alt="shoe" />
      </div>
    </main>
  );
};

export default Main;
