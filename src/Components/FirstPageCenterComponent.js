import React from "react";
import styles from "../Styles/Home.module.css";
import { auth, provider } from "../firebase";
import { useState } from "react";

function FirstPageCenterComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        setIsLoggedIn(true);
        alert(`Welcome ${result.user["displayName"]}`);
      })
      .catch((e) => {
        console.log("Log in failed: ", e.message);
        setIsLoggedIn(false);
      });
  };
  return (
    <div className={styles.centerDiv}>
      <h1 className={styles.largeHeading1}>Track your books!!</h1>
      <div className={styles.spacerDiv}></div>
      <h2 className={styles.largeHeading2}>Anytime, Anywhere</h2>
      <div className={styles.spacerDiv}></div>
      <h3 className={styles.largeHeading3}>
        Ready to track? Sign in with google.
      </h3>
      <div className={styles.spacerDiv}></div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default FirstPageCenterComponent;
