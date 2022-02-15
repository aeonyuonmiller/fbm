import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import LoginModal from "./components/LoginModal/LoginModal";
import SignUpModal from "./components/LoginModal/SignUpModal";
import Error from "./components/Error/Error";

const AnimatedRoutes = () => {
    const location = useLocation();
    const { pathname } = location;

  return (
    <AnimatePresence exitBeforeEnter={pathname === "/" ? true : false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/">
          <Route path="login" element={<LoginModal />} />
          <Route path="signup" element={<SignUpModal />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;