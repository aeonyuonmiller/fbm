import { useState, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LoginModal from "./LoginModal";
import './LoginModal.css'

    // animations
    const container = {
        hidden: { opacity: 0, scale: 0.9, x: 200 },
        show: { opacity: 1, scale: 1, x: "0%", transition:{ease: [0.9, 0, 0.1, 1], duration: 1}},
        exit: { opacity: 1, x: "120%", transition:{type:"tween", duration: .6}}
    }
    const input = {
        show: { opacity: 1, transition:{ staggerChildren: 0.3, duration: .8, delay: 0.4 }},
        hidden: { opacity: 0 }
    }
    const backdrop = {
        show: { opacity: 1, transition:{ duration: .8 }},
        hidden: { opacity: 0 }
    }

const SignUpModal = ({ closeModal }) => {
    
    // useStates
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // useRefs
    const fullNameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    return <>
            <motion.form layoutId="form" className="login"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                style={{ originX: 1 }}>
                <h5>Sign Up</h5>
                <motion.input value={fullName} ref={fullNameRef} variants={input} initial="hidden" animate="show" type="text" placeholder="Full name" />
                <motion.input value={username} ref={usernameRef} variants={input} initial="hidden" animate="show" type="text" placeholder="Username" />
                <motion.input value={email} ref={emailRef} variants={input} initial="hidden" animate="show" type="email" placeholder="Email" />
                <motion.input value={password} ref={passwordRef} variants={input} initial="hidden" animate="show" type="password" placeholder="Password" />
                <motion.button initial={{y:100}} animate={{y:0, transition:{delay:.5, duration: .6, ease:[0.9, 0, 0.1, 1]}}} whileHover={{ scale:1.03 }}>Sign Up</motion.button>
                <Link to="/"><motion.button initial={{y:100}} animate={{y:0, transition:{delay:.65, duration: .6, ease:[0.9, 0, 0.1, 1]}}} whileHover={{ scale:1.03 }} className="secondary">Login</motion.button></Link>
            </motion.form>
            {/* <Link to="/"><motion.div className="backdrop"
                layoutId="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="show"
                exit="hidden"
                onClick={closeModal}>
                </motion.div></Link> */}
        
        <Routes>
            <Route path="/" />
            <Route path="login" element={<LoginModal />} />
            <Route path="/signup" element={<SignUpModal />} />
        </Routes>
    </>
};

export default SignUpModal;
