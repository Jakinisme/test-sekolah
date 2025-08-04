"use client"

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ButtonNav() {
    const [isBtnClick, setBtnClick] = useState(false)
    const navigate = useNavigate()

    const handleLinkClick = () => {
        setBtnClick(true)
        navigate("/profil")
    }

    return (
        <button onClick={handleLinkClick}>{isBtnClick ? " " : "Tentang Kami"}</button>
    )
}