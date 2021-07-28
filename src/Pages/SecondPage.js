import React from "react";
import SecondPageComp1 from "../Components/SecondPageComp1";
import SecondPageComp2 from "../Components/SecondPageComp2";
import styles from "../Styles/SecondPage.module.css";
function SecondPage() {
  return (
    <div className="secondPage">
      <h1 className={styles.heading1}>This is the second page</h1>
      <SecondPageComp1 />
      <SecondPageComp2 />
    </div>
  );
}

export default SecondPage;
