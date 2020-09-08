import React, {useState, useEffect, Suspense} from 'react';
import tw from 'twin.macro';
import 'tailwindcss/dist/base.min.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import PendleLogo from "./assets/pendle-college-logo.svg";

import useLocalStorage from "./hooks/useLocalStorage";
import CookiesContext from "./context/cookiesContext";
import EventsContext from "./context/eventsContext";

import Menu from "./components/Menu";
import LoadingCard from "./components/LoadingCard";
import Cookies from "./components/Cookies";

import Messenger from './components/Messenger';
import Firebase, {useFirebase} from './components/Firebase';
const firebase = useFirebase();

const Events = React.lazy(() => import("./screens/Events"));
const Welfare = React.lazy(() => import("./screens/Welfare"));
const Sports = React.lazy(() => import("./screens/Sports"));
const JCR = React.lazy(() => import("./screens/JCR"));
const Witch = React.lazy(() => import("./screens/Witch"));
const Talks = React.lazy(() => import("./screens/Talks"));

const Container = tw.div`w-full h-full fixed bg-gray-100 flex flex-col`;
const Header = tw.div`w-full bg-white flex flex-row p-3 flex-shrink-0 cursor-pointer`;
const Content = tw.div`w-full flex flex-col flex-grow overflow-y-auto`;
const Logo = tw.img`w-full bg-white h-20`;

export default () => {
    return (
        <Router>
        <ContextProviders>
            <Cookies/>
            <Firebase/>
            <Messenger/>
            <Container>
            <Link to="/">
                <Header>
                <Logo src={PendleLogo} alt="Pendle College Logo"/>
                </Header>
            </Link>
            <Menu/>
            
            <Content>

                <Suspense fallback={<LoadingCard/>}>
                    <Switch>
                        <Route path="/talks" component={Talks}/>
                        <Route path="/blog" component={Witch}/>
                        <Route path="/sports" component={Sports}/>
                        <Route path="/welfare" component={Welfare}/>
                        <Route path="/jcr" component={JCR}/>
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
