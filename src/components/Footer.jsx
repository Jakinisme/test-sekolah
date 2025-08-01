import React from 'react';

export default function Footer({ name }) {
    return (
        <>
            <footer className='footer'>
                <div className='footer-content'>
                    <div className='footer-text'>
                        © 2023 {name}. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}