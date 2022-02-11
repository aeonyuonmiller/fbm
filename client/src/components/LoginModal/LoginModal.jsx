import { useRef, useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import './LoginModal.css';
import SignUpModal from "./SignUpModal";

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

const LoginModal = ({ closeModal }) => {

    // useStates
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // useRefs
    const emailRef = useRef();
    const passwordRef = useRef();

    return <>
        <motion.form layoutId="form" className="login"
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ originX: 1 }}>
            <h5>Login</h5>
            <motion.input value={email} ref={emailRef} variants={input} initial="hidden" animate="show" exit="hidden" type="email" placeholder="Email" />
            <motion.input value={password} ref={passwordRef} variants={input} initial="hidden" animate="show" exit="hidden" type="password" placeholder="Password" />
            <Link to="/"><motion.button initial={{y:100}} animate={{y:0, transition:{delay:.5, duration: .6, ease:[0.9, 0, 0.1, 1]}}} whileHover={{ scale:1.03 }}>Login</motion.button></Link>
            <Link to="signup"><motion.button initial={{y:100}} animate={{y:0, transition:{delay:.65, duration: .6, ease:[0.9, 0, 0.1, 1]}}} whileHover={{ scale:1.03 }} className="secondary">Sign Up</motion.button></Link>
        </motion.form>
        <Link to="/"><motion.div className="backdrop"
            layoutId="backdrop"
            variants={backdrop}
            initial="hidden"
            animate="show"
            exit="hidden"
            onClick={closeModal}>
        </motion.div></Link>

        <Routes>
            <Route path="signup" element={<SignUpModal />} />
        </Routes>
    </>
};

export default LoginModal;
