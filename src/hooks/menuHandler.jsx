"use client"

//handler buat menu
import { useEffect, useState } from "react"

export const MenuHandler = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLinkClick = () => {
    closeMenu()
  }
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [isMenuOpen])

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    handleLinkClick,
  }
}