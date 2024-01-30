import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import styles from "./News.module.css"

function News(){
    const { id } = useParams()
    const [news, setNews] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/news/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
             })
                .then((resp) => resp.json())
                .then((data) => {
                    setNews(data)
                    // setServices(data.services)
                })
                .catch((err) => console.log(err))
        }, 300)

    }, [id])

    return (
       <>
        {news.title ? (
            <section className={styles.container}>
                <div className={styles.btnArea}>
                    <Link to='/'>Voltar</Link>
                </div>
                <div className={styles.title}>
                    <h1>{news.title} - <span>{news.category.name}</span></h1>
                    <h3>{news.subtitle}</h3>
                    <p> Por: {news.author} 
                        <span> Publicado em {news.date_publish}</span>
                        {news.update_publish.length > 0 &&(
                            <span>
                                Atualizado em {news.update_publish}
                            </span>
                        )}
                        {news.update_publish.length === 0 &&(
                            <span></span>
                        )}
                    </p>
                </div>
                <div className={styles.news_text}>
                    <p>{news.text}</p>
                </div>
            </section>
        ):(
            <section className={styles.container}>
                <div>
                    <h3>Carregando a notícia...</h3>
                </div>
            </section>
        )}
       </>
    )
}


export default News