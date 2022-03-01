import React from 'react';
import { motion } from "framer-motion";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import MentorList from "../../components/MentorList/MentorList";

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
enter:  { opacity: 1, rotate: 360 },
};

const Landingpage = () => {
  return <>
      <div className="bg" />
          <motion.img
            initial="hidden"
            animate="enter"
            variants={speed}
            src="/logo.png"
            className="logo"
            alt="Femme Bass Mafia"
      />
          <Hero />
          <MentorList />
          {/* <AnimatePresence exitBeforeEnter>
          {openModal && <LoginModal closeModal={toggleModal} />}
        </AnimatePresence>  */}
          <div className="content">
            <h2>Roboto Typeface</h2>
            <p>
              FemmeBassMafia is a mentorship program dedicated to women,
              transgender and non-binary people for the learning and practising
              of DJing.
            </p>
          </div>
          <Footer />
  </>;
};

export default Landingpage;
