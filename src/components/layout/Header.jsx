"use client"

import { MenuHandler } from "@hooks/menuHandler"
import { MenuOverlay } from "@components/ui/Menu"
 
import {Menu, X} from "lucide-react"
import logo from "@assets/img/logosmk1.png"

import "@styles/header.css"

export default function Header() {
    const {isMenuOpen, toggleMenu} = MenuHandler()
    
  return (
      <header className="header">
        <div className="header-content">

          <div className="school-profile">
            <a href="/" className="logo-link">
              <img src={logo} alt="SMK Negeri 1 Tuban Logo" className="school-logo" />
              <div className="school-info">
                <h1 className="school-name">SMK NEGERI 1 TUBAN</h1>
                <p className="school-location">Jl. Mastrip No.2, Sidorejo, Kec. Tuban, Kabupaten Tuban, Jawa Timur 62315</p>
              </div>
            </a>
          </div>

          <div className="hamburger-menu">
            <button
              className="hamburger-btn"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className="menu-overlay">
          <MenuOverlay isMenuOpen={isMenuOpen} closeMenu={toggleMenu} />
        </div>      
      </header>
  )
}
