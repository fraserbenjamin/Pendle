import { useContext, useEffect } from 'react';
import * as firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/performance";
import "firebase/auth";
import "firebase/analytics";
import CookiesContext from "../context/cookiesContext";

const firebaseConfig = {
    apiKey: "AIzaSyCAVOb16rgsPrICKAHUSQt--9Rq0qAgAnw",
    authDomain: "pendle.firebaseapp.com",
    databaseURL: "https://pendle.firebaseio.com",
    projectId: "pendle",
    storageBucket: "pendle.appspot.com",
    messagingSenderId: "213950322204",
    appId: "1:213950322204:web:734c3b65f7d922f61031d9",
    measurementId: "G-DETBB1YM17"
  };

firebase.initializeApp(firebaseConfig);

export const useFirebase = () => {
  return firebase;
}

export default () => {
  const {cookiesAllowed} = useContext(CookiesContext);
  
  useEffect(() => {
    if(cookiesAllowed) {
      firebase.analytics();
      firebase.performance();
    }
  }, [cookiesAllowed]);

  return null;
}