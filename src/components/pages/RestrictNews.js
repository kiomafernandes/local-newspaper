import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"

import styles from "./ResttrictNews.module.css"
import NewsForm from "../forms/NewsForm"
import NewsShowCard from "../layout/NewsShowCard"

function RestrictNews(){
    const { id } = useParams()
    const [news, setNews] = useState([])
    const [showNewsForm, setShowNewsForm] = useState(false)
    const navigate = useNavigate()

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


    function dateUpdate(news) {
        const date = new Date().toLocaleDateString()
            if(news.date_publish > 0){
                setNews({update_publish : date })
            }
    }




    function editNews(news) {
        dateUpdate()


        fetch(`http://localhost:5000/news/${news.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(news),
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setNews(data)
                    navigate('/restrictarea')
                    console.log(data)
                })
                .catch((err) => console.log(err))

    }

    function removeNews(id) {

        fetch(`http://localhost:5000/news/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json)
            .then((data) => {
                // setNews(news.filter((news) => news.id !== id))
                setNews(Array.isArray((news) =>
                    news.filter(el => el.id !== id)
                ))
                navigate('/restrictarea')
                // console.log(data)
            })
            .catch((err) => console.log(err))
    }


    function toggleNewsForm() {
        setShowNewsForm(!showNewsForm)
    }

    // console.log(news)

    return (
       <>
        {news.title ? (
            <section className={styles.container}>
                <div className={styles.btnArea}>
                    <Link to='/restrictarea'>Voltar</Link>
                    <button onClick={toggleNewsForm}>
                        {!showNewsForm ? 'Editar' : 'Fechar'}
                    </button>
                    {/* <button onClick={removeNews}>Deletar</button> */}
                </div>
                {!showNewsForm ? (
                    <NewsShowCard 
                        id={news.id}
                        title={news.title}
                        category={news.category.name}
                        subtitle={news.subtitle}
                        author={news.author}
                        date_publish={news.date_publish}
                        update_publish={news.update_publish}
                        text={news.text}
                        key={news.id}
                        handleRemove={removeNews}
                    />
                    // <div className={styles.title}>
                    //     <h1>{news.title} - <span>{news.category.name}</span></h1>
                    //     <h3>{news.subtitle}</h3>
                    //     <p> Por: {news.author} 
                    //         <span> Publicado em {news.date_publish}</span>
                    //         {news.update_publish.length > 0 &&(
                    //             <span>
                    //                 Atualizado em {news.update_publish}
                    //             </span>
                    //         )}
                    //         {news.update_publish.length === 0 &&(
                    //             <span></span>
                    //         )}
                    //     </p>
                    //     <div className={styles.news_text}>
                    //         <p>{news.text}</p>
                    //     </div>
                    // </div>

                ) : (
                    
                    <div className={styles.edit}>
                        <NewsForm 
                            handleSubmit={editNews}
                            btnText='Publicar'
                            newsData={news}
                        />
                    </div>
                )}
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


export default RestrictNews