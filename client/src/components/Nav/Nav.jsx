import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Nav = (props,{ openModalProps }) => {

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
    hover: { scale: 0.95, transition: {type: "tween", duration: 0.05}}
  };
  // const speed = {
  //   hidden: { opacity: 0 },
  //   enter: { opacity: 1, rotate: 360 },
  // };
    
    return <nav>
            <motion.ul variants={container} initial="hidden" animate="show">
              <Link to="/dashboard">
                <motion.li
                  variants={item}
                  tabIndex={1}
                  whileHover={item.hover}>
                  Dashboard
                </motion.li>
              </Link>
              <motion.li
                tabIndex={1}
                variants={item}
                className="loginBtn"
                onClick={() => props.openModalProps()}
                // onClick={openModalProps}
                whileHover={item.hover}
              >
                Login
              </motion.li>
            </motion.ul>
      
          </nav>;
}

export default Nav