import { doc, getDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import fireBase, { db } from "../helpers/firebase";

export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({ children }) => {
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

  let [user, setUser] = useState("");
  let [hasAccount, setHasAccount] = useState("");
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [userDetails, setUserDetails] = useState({});
  let [test, setTest] = useState("Hellooooooo!!");
  let [isUserWorker, setIsUserWorker] = useState(false);

  const authListener = () => {
    fireBase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        async function getFromDb() {
          const docRef = doc(db, "userData", user.uid);
          // console.log('uid', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            let docSnapData = docSnap.data();
            console.log(docSnapData);
            setUserDetails(docSnapData);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
        getFromDb();
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
    console.log("userDetails", userDetails.email);
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
    userDetails,
    setUserDetails,
    isUserWorker,
    setIsUserWorker,
  };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default GlobalContextProvider;
