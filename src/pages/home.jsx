
import Tes from '@components/test'
import HeroSection from "@components/sections/HeroSection"
import '@styles/home.css'

export default function Home(){
    return(
            <div className ="home-container">
                <div className ="home-content">
                    <HeroSection />
                    <Tes />
                </div>
            </div>      
    )
}