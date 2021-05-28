import Link from 'next/link'
import navStyles from '../styles/Navigation.module.css'
import React from 'react'
const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.links}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/customerSide'>Customer side</Link></li>
                <li><Link href='/sellerSide'>Seller side</Link></li>
            </ul>
        </nav>
    )
}

export default Nav