import { motion, AnimatePresence } from "framer-motion";
import './LoginModal.css'

    const container = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    const LoginModal = ({showModal, setShowModal}) => {
    return <AnimatePresence exitBeforeEnter>
        { showModal && (
        <motion.form variants={container} initial="hidden" animate="visible" id="login">
        <h5>Login</h5>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        </motion.form>)}
    </AnimatePresence>;
};

export default LoginModal;
