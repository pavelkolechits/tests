import { FC } from "react";
import { MenuBar } from "../MenuBar/MenuBar";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

export const Layout: FC = () => {
  return (
    <>
      <MenuBar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
