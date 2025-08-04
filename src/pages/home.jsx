"use client"

import HeroSection from "../components/heroSection"

export default function Home(){
    return(
        <>
        <main className="main">
            <div className ="home-container">
                <div className ="home-content">
                    <HeroSection />
                </div>
            </div>
        </main>         
        </>
    )
}