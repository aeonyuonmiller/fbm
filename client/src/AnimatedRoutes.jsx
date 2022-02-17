import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Error from "./components/Error/Error";
import LoginModal from "./components/LoginModal/LoginModal";
import SignUpModal from "./components/LoginModal/SignUpModal";
import Dashboard from "./Views/Dashboard/Dashboard";
import Landingpage from "./Views/Landingpage/Landingpage";

const AnimatedRoutes = () => {
    const location = useLocation();
    // const { pathname } = location;

  return (
    // <AnimatePresence exitBeforeEnter={pathname === "/" ? true : false}>
    <AnimatePresence exitBeforeEnter>
      <Routes location={location}>
        <Route path="/" element={<Landingpage />}>
          <Route path="login" element={<LoginModal />}/>
          <Route path="signup" element={<SignUpModal/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;