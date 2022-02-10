import "./App.css";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { MentorsContextProvider } from "./Context/mentorsContext";
import MentorList from "./components/MentorList/MentorList";
import LoginModal from "./components/LoginModal/LoginModal";

function App() {
  // animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  const speed = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, rotate: 360 },
  };

  // modal state
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <MentorsContextProvider>
      <MotionConfig reducedMotion="user">
        <div className="bg" />
        <nav>
          <motion.ul variants={container} initial="hidden" animate="show">
            <motion.li variants={item} tabIndex={1}>
              Mixes
            </motion.li>
            <motion.li variants={item} tabIndex={1}>
              Mentors
            </motion.li>
            <motion.li
              tabIndex={1}
              variants={item}
              className="loginBtn"
              onClick={toggleModal}
              // inline isn't the cleanest
              // onClick={() => {
              //   setOpenModal(true);
              // }}
            >
              Login
            </motion.li>
          </motion.ul>
        </nav>
        <motion.img
          drag
          initial="hidden"
          animate="enter"
          variants={speed}
          src="/logo.png"
          className="logo"
          alt="Femme Bass Mafia"
        />
        <Hero />
        <MentorList />
        <AnimatePresence exitBeforeEnter>
          {openModal && <LoginModal closeModal={toggleModal} />}
        </AnimatePresence>
        <div className="content">
          <h2>Roboto Typeface</h2>
          <p>
            FemmeBassMafia is a mentorship program dedicated to women,
            transgender and non-binary people for the learning and practising of
            DJing.
          </p>
        </div>
        <Footer />
      </MotionConfig>
    </MentorsContextProvider>
  );
}

export default App;
