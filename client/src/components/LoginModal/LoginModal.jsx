import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './LoginModal.css'

    // animations
    const container = {
        show: { opacity: 1, scale: 1, x: 0, transition:{ease: [0.9, 0, 0.1, 1], duration: 1}},
        hidden: { opacity: 0, scale: 0.9, x: 200 },
        exit: { opacity: 0, x: 200 }
    }
    const input = {
        show: { opacity: 1, transition:{ staggerChildren: 0.3, duration: .8, delay: 0.4 }},
        hidden: { opacity: 0 }
    }
    const backdrop = {
        show: { opacity: 1, transition:{ duration: .8 }},
        hidden: { opacity: 0 }
    }

    // modal function
    const closeModal = () => {
    closeModal(false);
  };

const LoginModal = ({closeModal}) => {

    return <>
            <motion.form
                id="login"
                variants={container}
                initial="hidden"
                animate="show"
                style={{ originX: 1 }}>
                <h5>Login</h5>
                <motion.input variants={input} initial="hidden" animate="show" type="text" placeholder="Username" />
                <motion.input variants={input} initial="hidden" animate="show" type="email" placeholder="Email" />
                <motion.input variants={input} initial="hidden" animate="show" type="password" placeholder="Password" />
                <motion.button exit={{y:100}} initial={{y:100}} animate={{y:0, transition:{delay:.5, duration: .8, ease:[0.9, 0, 0.1, 1]}}} whileHover={{ scale:1.03 }}>Login</motion.button>
                <motion.button exit={{y:100}} initial={{y:100}} animate={{y:0, transition:{delay:.65, duration: .8, ease:[0.9, 0, 0.1, 1]}}} whileHover={{ scale:1.03 }} className="secondary">Sign Up</motion.button>
            </motion.form>
            <motion.div
                className="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="show"
                exit="hidden"
                onClick={closeModal}>
            </motion.div>
    </>
};

export default LoginModal;
