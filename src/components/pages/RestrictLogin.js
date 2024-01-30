import LoginForm from "../forms/LoginForm"
import { Link } from "react-router-dom"

import styles from "./RestrictLogin.module.css"

function RestrictLogin() {

    return(
        <div className={styles.login_container}>
            <div className={styles.login_title}>
                <h1>Área restrita</h1>
                <Link to="/">Voltar</Link>
            </div>
            <div className={styles.login_form}>
                <h2>Login</h2>
                <LoginForm />
            </div>
        </div>
    )
}


export default RestrictLogin