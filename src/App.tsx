import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Test from "./pages/test/Test";
import { UserContextProvider } from "./context/user-context";
import { ContextService } from "./context/context-service";
import Footer from "./components/footer/footer";
import Home from "./pages/home";

import { theme } from "./theme/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Services } from "./pages/services";
import Test2 from "./pages/test2/Test2";
import Post1 from "./posts/Post1";
import Post2 from "./posts/Post2";
import Test3 from "./pages/test3/Test3";
import CareerCoaching from "./pages/career-coaching";
import ComingSoon from "./pages/coming-soon";
import ILab from "./pages/ilab";
import CookieConsent from "./components/consent/cookie-consent";
import Jobs from "./pages/jobs";
import React, { useEffect, useState } from "react";
import SignIn from "./user/sign-in";
import Training from "./pages/training";
import SignOut from "./user/sign-out";
import Contact from "./pages/contact";
import CaseStudy from "./pages/use-study";
import Events from "./pages/events";

function App() {
  //const context = useContext(userContext);

  const [context, setContext] = useState(new ContextService());

  const [contextUpdate, setContextUpdate] = useState(false);

  const forceUpdate = () => {
    setContextUpdate(!contextUpdate);
  };

  useEffect(() => {
    //document.title = "BSG:Welcome";
  }, []);

  return (
    <UserContextProvider value={{ context, contextUpdate, forceUpdate }}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <Nav></Nav>
            <div className="App-main">
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/jobs" exact component={Jobs} />
              <Route path="/jobs/:id" exact component={Jobs} />
              <Route path="/jobs/:id/:action" exact component={Jobs} />
              <Route path="/training" exact component={Training} />
              <Route path="/ilab" exact component={ILab} />
              <Route path="/case-study" exact component={CaseStudy} />
              <Route path="/case-study/:category" exact component={CaseStudy} />
              <Route path="/contact-us" exact component={Contact} />
              <Route path="/career-coaching" exact component={CareerCoaching} />
              <Route path="/sign-in" exact component={SignIn} />
              <Route path="/sign-out" exact component={SignOut} />
              <Route path="/events" exact component={Events} />
              <Route path="/events/:id" exact component={Events} />
              <Route path="/events/:id/:action" exact component={Events} />
              <Route path="/test" exact component={Test} />
              <Route path="/test2" exact component={Test2} />
              <Route path="/test3" exact component={Test3} />
              <Route path="/services" exact component={Services} />
              <Route path="/post1" exact component={Post1} />
              <Route path="/post2" exact component={Post2} />
              <Route path="/coming-soon" exact component={ComingSoon} />
            </div>
            <Footer></Footer>
            <CookieConsent></CookieConsent>
          </div>
        </Router>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
