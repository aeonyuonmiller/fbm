import "./App.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { MentorsContextProvider } from "./Context/mentorsContext";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Nav from "./components/Nav/Nav";
import LoginModal from "./components/LoginModal/LoginModal";

function App() {
  const containerRef = useRef(null);
  const speed = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, rotate: 360 },
  };

  // modal
  const [modal, setModal] = useState(false);
  function closeModal() {
    setModal(false);
  }
  function openModal() {
    setModal(true);
  }

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
            {modal && <LoginModal />}
          </MotionConfig>
        </Router>
      </MentorsContextProvider>
    </LocomotiveScrollProvider>
  );
}

export default App;
