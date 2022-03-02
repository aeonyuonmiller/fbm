import "./App.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import { MentorsContextProvider } from "./Context/mentorsContext";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Nav from "./components/Nav/Nav";

function App() {
  const containerRef = useRef(null);
  const speed = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, rotate: 360 },
  };

  return (
    <LocomotiveScrollProvider containerRef={containerRef}>
      <MentorsContextProvider>
        <Router>
          <MotionConfig reducedMotion="user">
            <Link to="/">
              <motion.img
                initial="hidden"
                animate="enter"
                variants={speed}
                src="/logo.png"
                className="logo"
                alt="Femme Bass Mafia"
              />
            </Link>
            {/* data-scroll-container ref={containerRef} */}
            <AnimatedRoutes />

            <Nav />
          </MotionConfig>
        </Router>
      </MentorsContextProvider>
    </LocomotiveScrollProvider>
  );
}

export default App;
