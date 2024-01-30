import { useState, useEffect } from "react"

import CardMinNews from "../layout/CardMinNews"

import styles from "./Home.module.css"

function Home() {

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
        <section className={styles.container}>
            <div className={styles.content_news}>
                {allNews.length > 0 &&
                 allNews.map((news) => (
                    <CardMinNews 
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
        </section>
    )
}

export default Home