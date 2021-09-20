import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

//Create Authentication Context
const AuthContext = React.createContext();

// Get Authcontext Provider Value
export function useAuth() {
  return useContext(AuthContext);
}

//Create Authentication Provider
export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  //listen auth change (login/logout) and update states
  useEffect(() => {
    const auth = getAuth();
    const unsbscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsbscribe;
  }, []);

  //signup user
  async function signup(email, password, username) {
    // create user in firbase
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    //replace default firbase username with input username
    await updateProfile(auth.currentUser, { displayName: username });

    //update local state with newly created user
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  //login user
  async function login(email, password) {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
  }

  //logout user
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  //set provider value
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
