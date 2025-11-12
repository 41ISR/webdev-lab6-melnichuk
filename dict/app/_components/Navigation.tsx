'use client'

import Link from 'next/link'
import './components.scss'

export default function Navigation(){
    return (
        <nav>
            <h4 className="logo">
                LexiGuide
            </h4>
            <ul className="nav-links">
                <Link href={'/'}>Main</Link>
                <Link href={'/word-by-mask'}>Search by mask</Link>
                <Link href={'/word-by-meaning'}>Search by meaning</Link>
            </ul>
        </nav>
    )
}