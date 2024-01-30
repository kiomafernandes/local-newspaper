import styles from "./NewsShowCard.module.css"

function NewsShowCard({id, title, category, author, subtitle, date_publish, update_publish, text, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.container}>
            <div className={styles.btnArea}>
                <button onClick={remove}>Deletar</button>
            </div>
            <div className={styles.title}>
                <h1>{title} - <span>{category}</span></h1>
                <h3>{subtitle}</h3>
                <p> Por: {author} 
                    <span> Publicado em {date_publish}</span>
                    {update_publish ?(
                        <span>
                            Atualizado em {update_publish}
                        </span>
                    ):(
                    // {update_publish.length === 0 &&(
                        <span></span>
                    )}
                </p>
                <div className={styles.news_text}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}



export default NewsShowCard