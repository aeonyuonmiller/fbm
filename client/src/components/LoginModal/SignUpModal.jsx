import { useState, useRef } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import './LoginModal.css'
// import LoginModal from "./LoginModal";

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
    
    // useRefs
    const fullNameRef   = useRef();
    const usernameRef   = useRef();
    const emailRef      = useRef();
    const passwordRef = useRef();
    
    // actions
    const handleSignUp = (e) => { 
        e.preventDefault();
        console.log('fullNameRef', fullNameRef);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("name", fullNameRef.current.value);
        urlencoded.append("email", emailRef.current.value);
        urlencoded.append("password", passwordRef.current.value);
        urlencoded.append("username", usernameRef.current.value);

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        };
        // const {user} = useFetch("http://localhost:5000/api/users/signup", requestOptions)
        fetch("http://localhost:5000/api/users/signup", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    
    // function handleSignUp() {   
    // }

    return <>
            <motion.form layoutId="form" className="login"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                style={{ originX: 1 }}>
                <h5>Sign Up</h5>
                <motion.input ref={fullNameRef} variants={input} initial="hidden" animate="show" type="text" placeholder="Full name" />
                <motion.input ref={usernameRef} variants={input} initial="hidden" animate="show" type="text" placeholder="Username" />
                <motion.input ref={emailRef} variants={input} initial="hidden" animate="show" type="email" placeholder="Email" />
                <motion.input ref={passwordRef} variants={input} initial="hidden" animate="show" type="password" placeholder="Password" />
                <motion.button onClick={handleSignUp} initial={{y:100}} animate={{y:0, transition:{delay:.5, duration: .6, ease:[0.9, 0, 0.1, 1]}}} whileHover={{ scale:1.03 }}>Sign Up</motion.button>
                <Link to="login"><motion.button initial={{y:100}} animate={{y:0, transition:{delay:.65, duration: .6, ease:[0.9, 0, 0.1, 1]}}} whileHover={{ scale:1.03 }} className="secondary">Login</motion.button></Link>
            </motion.form>
            <Link to="/"><motion.div className="backdrop"
                layoutId="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="show"
                exit="hidden"
                onClick={closeModal}>
                </motion.div></Link>
        
        {/* <Routes>
            <Route path="/" />
            <Route path="login" element={<LoginModal />} />
            <Route path="/signup" element={<SignUpModal />} />
        </Routes> */}
    </>
};

export default SignUpModal;
