import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const naviationItems = props => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/" active>
      Checkout
    </NavigationItem>
  </ul>
);

export default naviationItems;
