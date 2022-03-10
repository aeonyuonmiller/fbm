import React from "react";
import './LoginModal/LoginModal.css';

import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ showModal, closeModal }) => {
    // console.log('showModal', showModal);
  return (
    <>
      <AnimatePresence initial={false}>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.3 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
          >
            <motion.button onClick={closeModal}>
              Close
            </motion.button>
            <motion.p
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            >
              Modal content!!!!
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
