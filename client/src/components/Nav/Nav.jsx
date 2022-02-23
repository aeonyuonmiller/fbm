import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Nav() {

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
    
    return <nav>
            <motion.ul variants={container} initial="hidden" animate="show">
              <Link to="/dashboard"><motion.li variants={item} tabIndex={1}>
                Dashboard
              </motion.li></Link>
              <Link to="/login" state={{ fromHome: true }}>
                <motion.li
                  tabIndex={1}
                  variants={item}
                  className="loginBtn"
                  // onClick={toggleModal}
                  // inline isn't the cleanest
                  // onClick={() => {
                  //   setOpenModal(true);
                  // }}
                >
                  Login
                </motion.li>
              </Link>
            </motion.ul>
          </nav>;
}
