import React from "react";
import Nav from "./Nav";
import classes from '../styles/Layout.module.css'

export default function Layout({children}) {
  return (
    <div>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </div>
  );
}
