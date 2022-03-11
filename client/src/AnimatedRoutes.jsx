import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Error from "./components/Error/Error";
import LoginModal from "./components/LoginModal/LoginModal";
import SignUpModal from "./components/LoginModal/SignUpModal";
import Dashboard from "./Views/Dashboard/Dashboard";
import Landingpage from "./Views/Landingpage/Landingpage";

const AnimatedRoutes = () => {

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
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