import React, {useState, useEffect, Suspense} from 'react';
import tw from 'twin.macro';
import 'tailwindcss/dist/base.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import PendleLogo from "./assets/pendle-college-logo.svg";

import useLocalStorage from "./hooks/useLocalStorage";
import CookiesContext from "./context/cookiesContext";
import EventsContext from "./context/eventsContext";

import Menu from "./components/Menu";
import LoadingCard from "./components/LoadingCard";
import Events from "./screens/Events";

import {useFirebase} from './components/Firebase.js';
const firebase = useFirebase();

const Container = tw.div`w-full h-full fixed bg-gray-200 flex flex-col`;
const Header = tw.div`w-full bg-white flex flex-row p-3 flex-shrink-0`;
const Content = tw.div`w-full flex flex-col flex-grow overflow-y-auto`;
const Logo = tw.img`w-full bg-white h-20`;

export default () => {
  return (
    <Router>
      <ContextProviders>
        <Container>
          <Header>
            <Logo src={PendleLogo} alt="Pendle College Logo"/>
          </Header>
          <Menu/>
          
          <Content>
            <Suspense fallback={<LoadingCard/>}>
              <Switch>
                <Route path="/sports" component={null}/>
                <Route path="/jcr" component={null}/>
                <Route path="/" component={Events}/>
              </Switch>
            </Suspense>
          </Content>
        </Container>
      </ContextProviders>
    </Router>
  );
}

const ContextProviders = ({children}) => {
  const [cookiesAllowed, setCookiesAllowed] = useLocalStorage("cookiesAllowed", false);
  const [events, setEvents] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
      db.collection("events").get()
      .then(function(querySnapshot) {
          let eventsArray = [];
          querySnapshot.forEach(function(doc) {
              eventsArray.push({...doc.data(), id: doc.id});
          });
          setEvents(eventsArray);
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  }, [db]);

  return (
    <CookiesContext.Provider value={{
      cookiesAllowed,
      setCookiesAllowed
    }}>
      <EventsContext.Provider value={{
        events
      }}>
        {children}
      </EventsContext.Provider>
    </CookiesContext.Provider>
  )
}
