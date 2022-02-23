import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Error from "./components/Error/Error";
import LoginModal from "./components/LoginModal/LoginModal";
import SignUpModal from "./components/LoginModal/SignUpModal";
import Dashboard from "./Views/Dashboard/Dashboard";
import Landingpage from "./Views/Landingpage/Landingpage";

const AnimatedRoutes = () => {

  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={background || location}>
        <Route exact path="/" children={<Landingpage/>}/>
        <Route path="/login" children={<LoginModal />}/>
        <Route path="signup" children={<SignUpModal />}/>
        <Route path="/dashboard" children={<Dashboard/>}/>
        <Route path="*" children={<Error />}/>
      </Switch>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;