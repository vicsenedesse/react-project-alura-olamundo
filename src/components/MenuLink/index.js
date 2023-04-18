import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../Menu/Menu.module.css'

export default function MenuLink({
    label,
    path
}) {
    const location = useLocation();
    return (
        <Link className={`
        ${styles.link} 
        ${location.pathname === path ? styles.linkDestacado : ''}`} 
        to={path}>
                    {label}
        </Link>
    )
}
