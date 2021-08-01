import React from "react";
import styles from "../Styles/Home.module.css";
import FirstPageCenterComponent from "../Components/FirstPageCenterComponent";

//In this page we will only set background image. Rest things will be added as components.
function Home() {
  return (
    <>
      <div className={`${styles.backgroundDiv}`}>
        {/* <h1>This is front page</h1> */}

        <div className={styles.blackOpacity}>
          <FirstPageCenterComponent />
        </div>
      </div>
    </>
  );
}

export default Home;
