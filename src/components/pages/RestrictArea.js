import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import Message from "../layout/Message"
import CardNews from "../layout/CardNew"
import styles from "./RestrictArea.module.css"

function RestrictArea({message, types}) {
    const [allNews, setAllNews] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/news', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setAllNews(data)
                    // setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
        }, 0)
    }, [])

    return(
        <div className={styles.restrict_container}>
            <Message msg={message} type={types} />
            <div className={styles.title}>
                <h1>Área restrita</h1>
                <Link to='/createnews'>Criar noticias</Link>
                <Link to='/'>Sair</Link>
            </div>
            {/* <div className={styles.options}>
                <Link to='/createnews'>Criar noticias</Link>
            </div> */}
            <div className={styles.content}>
                <h1>Suas matérias</h1>
                <div className={styles.line}></div>
                <div className={styles.content_news}>
                {allNews.length > 0 &&
                 allNews.map((news) => (
                    <CardNews 
                        id={news.id}
                        title={news.title}
                        author={news.author}
                        category={news.category.name}
                        subtitle={news.subtitle}
                    />
                ))}
                {allNews.length === 0 && (
                    <p>Não há notícias cadastradas!</p>
                )}
                </div>
            </div>
        </div>
    )
}

export default RestrictArea