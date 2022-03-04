import { motion } from "framer-motion"

// JUST A EXAMPLE – not used anywhere

const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div variants={animations} transition={{ duration: 1 }}
            initial="initial" animate="animate" exit="exit"
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage