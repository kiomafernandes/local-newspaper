import { Link } from "react-router-dom"
import LoginForm from "../forms/LoginForm"

import styles from "./Login.module.css"

function Login() {
    return(
        <div className={styles.login_container}>
            <div className={styles.login_title}>
                <h1>Área do assinante</h1>
                <Link to="/">Voltar</Link>
            </div>
            <div className={styles.login_form}>
                <h2>Login</h2>
                <LoginForm />
            </div>
        </div>
    )
}


export default Login