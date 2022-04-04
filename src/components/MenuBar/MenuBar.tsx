import { FC } from "react";
import styles from "./menuBar.module.scss";
import { Link } from "react-router-dom";

export const MenuBar: FC = () => {
  return (
    <div className={styles.menubar}>
      <Link
      //  className={styles.link} 
       to="/">
        <button className={styles.link}>Home Page</button>
      </Link>

      <Link
      //  className={styles.link}
        to="/create-test">
        <button className={styles.link}>Create Test</button>
      </Link>
    </div>
  );
};
