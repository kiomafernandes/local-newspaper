import { Link } from "react-router-dom"

import styles from "./CardMinNews.module.css"

function CardMinNews({id, title, author, category, subtitle}) {
    return(
        <div className={styles.card_container}>
            <h3> <Link to={`/news/${id}`}>{title} </Link><span><Link>{category}</Link></span></h3>
            <p><q>{subtitle}</q></p>
            <p>{author}</p>
            {/* <div className={styles.buttons}>
                <Link to='/editnews'>Editar</Link>
                <Link>Deletar</Link>
            </div> */}
        </div>
    )
}


export default CardMinNews