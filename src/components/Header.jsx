"use client"

import { MenuHandler } from "../hooks/menuHandler"
import MenuOverlay from "../components/menu"
 
import {Menu, X} from "lucide-react"
import logo from "../assets/img/logosmk1.png"

import "../styles/header.css"

export default function Header() {
    const { isMenuOpen, toggleMenu} = MenuHandler()

  return (
    <>
      <header className="header">
        <div className="header-content">
          {/* logo */}
          <div className="school-profile">
            <a href="/" className="logo-link">
              <img src={logo} alt="SMK Negeri 1 Tuban Logo" className="school-logo" />
              <div className="school-info">
                <h1 className="school-name">SMK NEGERI 1</h1>
                <p className="school-location">TUBAN</p>
              </div>
            </a>
          </div>

          {/* tombol menu*/}
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

        <MenuOverlay isMenuOpen={isMenuOpen} closeMenu={toggleMenu} />
      </header>
    </>
  )
}
