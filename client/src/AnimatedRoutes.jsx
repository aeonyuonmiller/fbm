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
        <Route exact path="/">
          <Landingpage />
        </Route>
        <Route path="/login">
          <LoginModal/>
        </Route>
        <Route path="signup">
          <SignUpModal />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <Error />
        </Route>
        </Switch>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;