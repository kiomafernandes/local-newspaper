import { Link } from "react-router-dom"
import RegisterForm from "../forms/RegisterForm"
import styles from "./Register.module.css"



function Register() {
    return(
        <div className={styles.register_container}>
            <div className={styles.register_title}>
            <h1>Cadastro de assinantes</h1>
            <Link to="/">Voltar</Link>
            </div>
            <div className={styles.register_form}>
                <RegisterForm />
            </div>
            
        </div>
    )
}


export default Register