import React from "react";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="index.html" className={classes.brand}>
              <span class="material-icons-outlined">web</span>  <h3>FrontEnd Quiz</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    </>
  );
}
