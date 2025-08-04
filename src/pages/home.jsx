"use client"

import HeroSection from "../components/hero"
import '../styles/home.css'

export default function Home(){
    return(
        <>
            <div className ="home-container">
                <div className ="home-content">
                    <HeroSection />
                </div>
            </div>      
        </>
    )
}