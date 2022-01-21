import React from 'react'
import './Hero.css'

export const Hero = () => {
    return (
        <div className="hero">
            {/* gfx-in-css */}
            <div className="pattern" />
            <div className="content">
                <h1><strong>Femme Bass Mafia</strong> offers <span>mentorship</span> dedicated to women, transgender and non-binary people to learn <span>DJing</span></h1>
            </div>
        </div>
    )
}
