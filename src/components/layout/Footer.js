import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

import styles from "./Footer.module.css"

function Footer() {
    return(
       <footer className={styles.footer_container}>
        <div className={styles.footer}>
            <h3>Local News</h3>
            <div className={styles.footer_lists}>
                <ul>
                    <li>Colunas</li>
                    <li>Noticias dos mundo</li>
                    <li>Noticias nacionais</li>
                </ul>
                <ul>
                    <li>Colunistas</li>
                    <li>Sagas</li>
                    <li>Editorias</li>
                </ul>
            </div>
            <div className={styles.footer_social}>
                <ul>
                    <li><FaFacebook /></li>
                    <li><FaInstagram /></li>
                    <li><FaLinkedin /></li>
                </ul>
            </div>
        </div>

        <div className={styles.copy_right}>
            <p>
                <span>Local News</span> &copy; 2023
            </p>

            <ul>
                <li>Acessibilidade</li>
                <li>Trabalhe conosco</li>
                <li>Ajuda</li>
                <li>Idiomas</li>
                <li> <Link to="/restrictlogin">Área restrita</Link></li>
            </ul>
        </div>

       </footer>
    )
}

export default Footer