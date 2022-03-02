import React,{ useState } from 'react';
import { motion } from "framer-motion";
import { Footer } from "../../components/Footer/Footer";
import { Hero } from "../../components/Hero/Hero";
import MentorList from "../../components/MentorList/MentorList";
import LoginModal from '../../components/LoginModal/LoginModal';

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

const Landingpage = () => {

  const [modal, setModal] = useState(false);
  function handleOpen() {
    setModal(true);
  };
  function handleClose() {
    setModal(false);
  };
  
  return <>
      <div className="bg" />
          <Hero />
          <MentorList />
    
          <div className="content">
            <h2>Roboto Typeface</h2>
            <p>
              FemmeBassMafia is a mentorship program dedicated to women,
              transgender and non-binary people for the learning and practising
              of DJing.
            </p>
          </div>
      <Footer />
    
      {/* <AnimatePresence exitBeforeEnter> */}
        {modal && <LoginModal openModal={setModal} />}
      {/* </AnimatePresence>  */}
  </>;
};

export default Landingpage;
