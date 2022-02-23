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
        <Route path="/">
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