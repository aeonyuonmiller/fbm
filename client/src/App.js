import "./App.css";
import { useRef, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { MentorsContextProvider } from "./Context/mentorsContext";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Nav from "./components/Nav/Nav";

function App() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider containerRef={containerRef}>
      <MentorsContextProvider>
        <Router>
          <MotionConfig reducedMotion="user">
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
