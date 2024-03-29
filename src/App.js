import Home from "./pages/Home"
import GlobalStyles from "./components/GlobalStyles"
import {Route, Switch, useLocation, } from "react-router-dom"
import Footer from "./components/Footer"
import Gamedetails from "./components/Gamedetails"
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header"
import Nav from "./components/Nav"


function App() {
  const location = useLocation();
  
  
  return (
    <div className="App">
    <GlobalStyles />
      <Header />
      <Nav />
    
    <AnimatePresence exitBeforeEnter>
     <Switch location={location} key={location.pathname}>
     <Route path="/" exact>
     <Home />
     </Route>
     
     <Route path="/game/:id" exact>
     <Gamedetails />
     </Route>

     {/* <Redirect to="/" /> */}

     </Switch>
    </AnimatePresence>


     <Footer />
    </div>
  );
}

export default App;
