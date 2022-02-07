import "./App.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { MentorsContextProvider } from "./Context/mentorsContext";
import { MentorList } from "./components/MentorList/MentorList";

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

  return (
    <MentorsContextProvider>
      <AnimatePresence>
        <div className="bg" />
        <nav>
          <motion.ul variants={container} initial="hidden" animate="show">
            <motion.li variants={item}>Mixes</motion.li>
            <motion.li variants={item}>Mentors</motion.li>
            <motion.li variants={item}>Shop</motion.li>
            <motion.li variants={item} className="loginBtn">
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
        <div className="content">
          <h2>Roboto Typeface</h2>
          <p>
            FemmeBassMafia is a mentorship program dedicated to women,
            transgender and non-binary people for the learning and practising of
            DJing.
          </p>
          <h3>Femme Bass Mafia</h3>
          <h4>Femme Bass Mafia</h4>
          <h5>Kontakt</h5>
          <button>more</button>
        </div>
        <Footer />
      </AnimatePresence>
    </MentorsContextProvider>
  );
}

export default App;
