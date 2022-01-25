import "./App.css";
import { useState, createContext } from "react";
import { AnimatePresence } from "framer-motion";
import { Footer } from "./components/Hero/Footer";
import { Hero } from "./components/Hero/Hero";
import axios from "axios";

export const AppContext = createContext(null);

// fetch of mentors collection
async function getMentors() {
  try {
    const response = await axios.get("http://localhost:5000/api/mentors/all");
    console.log("get mentors", response);
  } catch (error) {
    console.error(error);
  }
}

function App() {
  return (
    <AppContext.Provider value={{}}>
      <AnimatePresence>
        <div className="bg" />
        <nav>
          <ul>
            <li>Mixes</li>
            <li>Mentors</li>
            <li>Shop</li>
            <li className="loginBtn">Login</li>
          </ul>
        </nav>
        <img src="/logo.png" className="logo" alt="Femme Bass Mafia" />
        <Hero />
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
    </AppContext.Provider>
  );
}

export default App;
