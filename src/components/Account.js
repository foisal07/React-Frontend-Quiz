import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <p>{`${currentUser.displayName}`}</p>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={handleLogout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
