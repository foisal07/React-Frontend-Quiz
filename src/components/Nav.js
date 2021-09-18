import React from "react";
import Account from "./Account";
import classes from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <>
    <nav className ={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src="./images/logo-bg.png" alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
    </>
  );
}
