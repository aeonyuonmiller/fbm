import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import LoginModal from "../LoginModal/LoginModal";

export default function Nav() {

  // modal
  const [modal, setModal] = useState(false)

  function closeModal() {setModal(false);}
  function openModal() {setModal(true);}

    // animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "tween",
        staggerChildren: 0.1,
        delay: 1
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  // const speed = {
  //   hidden: { opacity: 0 },
  //   enter: { opacity: 1, rotate: 360 },
  // };
    
    return <nav>
            <motion.ul variants={container} initial="hidden" animate="show">
              <Link to="/dashboard">
                <motion.li variants={item} tabIndex={1}>
                  Dashboard
                </motion.li>
              </Link>
              {/* <Link to="/login"> */}
                <motion.li
                  tabIndex={1}
                  variants={item}
                  className="loginBtn"
                  onClick={openModal}
                >
                  Login
                </motion.li>
            </motion.ul>
      
          </nav>;
}
