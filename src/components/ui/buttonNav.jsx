"use client"


import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ButtonNav({textContent, navigateTo}) {

  const [isBtnClick, setBtnClick] = useState(false)
  const navigate = useNavigate()

  const handleLinkClick = async () => {
    setBtnClick(true)
    navigate(navigateTo)
  }

  return (
    <button
      onClick={handleLinkClick}
      className={`nav-button ${isBtnClick ? 'active' : ''}`}
    >
      {textContent}
    </button>
  )
}
