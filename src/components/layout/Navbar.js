import { BsList, BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import styles from "./Navbar.module.css"

function Navbar() {
    const [date, setDate] = useState()

    
    useEffect(() => {
        const nowDate = new Date().toLocaleDateString()
           setDate(nowDate)
    }, [])
    

   


    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_title}>
                <div className={styles.navbar_title_info}>
                    <button><BsList /></button>
                    <button><BsSearch /></button>
                    <p>{date}</p>
                </div>
                <h1>Local News</h1>
                <div className={styles.navbar_title_buttons}>
                    <Link to="/register">Assine por R$ 9,90</Link>
                    <Link to="/login">LOG IN</Link>
                </div>
                        
            </div>
                <div className={styles.navbar_links}>
                    <ul>
                        <li>Segurança</li>
                        <li>Esporte</li>
                        <li>Saúde</li>
                        <li>Política</li>
                        <li>Economia</li>
                        <li>Lazer</li>
                        <li>Ceará</li>
                        <li>Brasil</li>
                        <li>Mundo</li>
                    </ul>
                </div>
                <div className={styles.navbar_line}></div>
        </nav>
    )
}

export default Navbar