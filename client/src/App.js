import "./App.css";
// import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Footer } from "./components/Footer/Footer";
// import { Hero } from "./components/Hero/Hero";
// import MentorList from "./components/MentorList/MentorList";
import Nav from "./components/Nav/Nav";
import { MentorsContextProvider } from "./Context/mentorsContext";

import { BrowserRouter, Outlet } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  // modal state
  // const [openModal, setOpenModal] = useState(false);
  // const toggleModal = () => {
  //   setOpenModal(!openModal);
  // };

  return (
    <MentorsContextProvider>
      <BrowserRouter>
        <AnimatedRoutes />
        <MotionConfig reducedMotion="user">
          <Nav />
          <Outlet />
        </MotionConfig>
      </BrowserRouter>
    </MentorsContextProvider>
  );
}

export default App;
