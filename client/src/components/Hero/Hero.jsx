import React from 'react'
import './Hero.css'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const swipe = {
    hidden: {opacity:0, y:-30},
    enter: {opacity:1, y:0, transition:{ delay:0.6, }},
    exit: {opacity:0, y:-20 }
};

export const Hero = () => {

    const { scrollYProgress } = useViewportScroll()
    const yLength = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yMinusLength = useTransform(scrollYProgress, [0, .8], [0, 200]);
    const trans = useTransform(scrollYProgress, [0, 1], [1, -1]);
    const size = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    
    return (
        <div className="hero">
            {/* gfx-in-css */}
            <motion.div
                className="pattern" 
                initial="hidden"
                animate="enter"
                style={{ scale:size, y:yMinusLength }}
                variants={swipe} />
            <div className="hero-content">
                <motion.h1
                    initial="hidden"
                    animate="enter"
                    style={{y:yLength, opacity:trans}}
                    variants={swipe}><strong>FemmeBassMafia</strong><span className="acronym">FBM</span> offers <span>mentorship</span> dedicated to women, transgender and non-binary people to learn <span>DJing</span></motion.h1>
            </div>
        </div>
    )
}
