'use client'

import Link from 'next/link'
import './components.scss'

export default function Footer(){
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-top">
                    <h4 className="logo">LexiGuide</h4>
                    <ul className="nav-links">
                        <Link href={'/'}>Main</Link>
                        <Link href={'/word-by-mask'}>Search by mask</Link>
                        <Link href={'/word-by-meaning'}>Search by meaning</Link>
                    </ul>
                </div>
                <div className="credits">
                    <p>© 2025 LexiGuide. All rights reserved.</p>
                </div>
                </div>
        </footer>
    )
}