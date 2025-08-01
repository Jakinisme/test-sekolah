import React from 'react'
import assets from '.././assets/test1.jpg';

export default function Header() {
    return (
        <>
           <header className='header'>
                <div className='header-content'>
                    <div className='navbar-content' id='navbarContent'>
                        1
                    </div>

                    <div className='school-profile'>
                        <img src={assets} alt="any" />
                    </div>
                </div>
           </header>
        </>
    )
}