import React, { createContext, useContext, useEffect, useState } from "react";
import firebase from "../helpers/firebase";

export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({ children }) => {
  let [user, setUser] = useState("");
  let [hasAccount, setHasAccount] = useState("");
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [test, setTest] = useState("Hellooooooo!!");

  const services = [
    {
      title: "Moving Services",
      link: "#",
      imgUrl:
        "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/06/moving-season-guide.jpg",
      subServices: [
        { name: "Help Moving", link: "#", id: 1 },
        { name: "Heavy Lifting", link: "#", id: 2 },
        { name: "Furniture Movers", link: "#", id: 3 },
        { name: "Full Service Help Moving", link: "#", id: 4 },
      ],
    },
  ];

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  // useEffect(() => {
  //    console.log(user);
  // }, [user]);
  let value = {
    services,
    user,
    setUser,
    hasAccount,
    setHasAccount,
    test,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default GlobalContextProvider;
