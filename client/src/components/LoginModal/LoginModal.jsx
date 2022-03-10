import { useRef } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import './LoginModal.css';

const LoginModal = ({ showModal, closeModal }) => {    
    // useRefs
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const container = {
        hidden: { opacity: 0, scale: 0.9, x: 200 },
        show: { opacity: 1, scale: 1, x: "0%", transition:{ease: [0.9, 0, 0.1, 1], duration: .6}},
        exit: { opacity: 1, x: "120%", transition:{type: "tween", duration: .6}}
    }
    const input = {
        show: { opacity: 1, transition:{ staggerChildren: 0.3, duration: .8, delay: 0.4 }},
        hidden: { opacity: 0 }
    }
    const backdrop = {
        show: { opacity: 1, transition:{ duration: .8 }},
        hidden: { opacity: 0 }
    }
    
    return (
    
    <>
        <AnimatePresence initial={false}>
            {showModal && (
                <>
                    <motion.form layoutId="form" className="login" variants={container} initial="hidden" animate="show" exit="exit" style={{ originX: 1 }}>
                        <h5 layoutId="title">Login</h5>
                        <motion.input layoutId="email" ref={emailRef} variants={input} initial="hidden" animate="show" exit="hidden" type="email" placeholder="Email" />
                        <motion.input layoutId="password" ref={passwordRef} variants={input} initial="hidden" animate="show" exit="hidden" type="password" placeholder="Password" />
                        <motion.button initial={{ y: 100 }} animate={{ y: 0, transition: { delay: .5, duration: .6, ease: [0.9, 0, 0.1, 1] } }} whileHover={{ scale: 1.03 }}>Login</motion.button>
                        <motion.button onClick={closeModal} initial={{ y: 100 }} animate={{ y: 0, transition: { delay: .65, duration: .6, ease: [0.9, 0, 0.1, 1] } }} whileHover={{ scale: 1.03 }} className="secondary">Sign Up</motion.button>
                    </motion.form>
                    <motion.div className="backdrop"
                        layoutId="backdrop"
                        variants={backdrop}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        onClick={closeModal}
                    />
                </>
            )}
        </AnimatePresence>
    </>
  )};

export default LoginModal;
