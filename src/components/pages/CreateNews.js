import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import NewsForm from "../forms/NewsForm"
import styles from "./CreateEdit.module.css"
// import { useState, useEffect } from "react"


function CreateNews() {
    const navigate = useNavigate()
    // const [publishMessage, setPublishMessage] = useState()
    

    function createPost(news) {
        // setPublishMessage('')

        fetch("http://localhost:5000/news", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(news),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/restrictarea', { message: 'Notícia publicada criado com sucesso!', types: 'success'})
                // setPublishMessage('Notícia publicada criado com sucesso!')

            })
            .catch((err) => console.log(err))

    }

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Criar noticias</h1>
                <Link to='/restrictarea'>Voltar</Link>
            </div>
            <div className={styles.form}>
                <NewsForm handleSubmit={createPost} btnText="Publicar"/>
            </div>
        </div>
    )
}


export default CreateNews