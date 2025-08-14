"use client"

import {X, Home, User, BookOpen, Newspaper, ImageIcon, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "@assets/img/logosmk1.png"

export function MenuOverlay({isMenuOpen, closeMenu}) {
    
        // item list buat menu
        const hamburgerItems = [
        { name: "Beranda", href: "/", icon: Home },
        { name: "Profil Sekolah", href: "/profil", icon: User },
        { name: "Program Keahlian", href: "/program", icon: BookOpen },
        { name: "Berita", href: "/berita", icon: Newspaper },
        { name: "Galeri", href: "/galeri", icon: ImageIcon },
        { name: "Kontak", href: "/kontak", icon: Phone },
      ]
    return (
        <>
        {/* menu dibuka, tampilin list item*/}
        {isMenuOpen && (
          <div className="nav-overlay" onClick={closeMenu}>
            <nav className="nav-menu" onClick={(e) => e.stopPropagation()}>
              <div className="nav-header">
                <div className="nav-logo">
                  <img src={logo} alt="SMK Negeri 1 Tuban Logo" />
                  <div>
                    <h2>SMK NEGERI 1 TUBAN</h2>
                    <h3>Terdepan dan Terpercaya</h3>
                  </div>
                </div>
                <button className="nav-close" onClick={closeMenu} aria-label="Close menu">
                  <X size={18} />
                </button>
              </div>

              <div className="nav-links">
                {hamburgerItems.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="nav-link"
                      onClick={closeMenu}
                      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                      <IconComponent size={22} />
                      <span>{item.name}</span>
                      </Link>
                  )
                })}
              </div>

            </nav>
          </div>
        )}
        </>
        
    )
}
        