import { useState, useEffect } from "react";


import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import Textarea from "../form/Textarea";


function NewsForm({handleSubmit, btnText, newsData}) {
    const [categories, setCategories] = useState([])
    const [news, setNews] = useState(newsData || [])
    // const [date_publish, setDate_publish] = useState([])
    // const [update_publish, setUpdate_publish] = useState([])


    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    // useEffect(() => {
    //     const date = new Date().toLocaleDateString()
    //         setNews({
    //             date_publish : date, update_publish: '' ? date_publish : ''
    //         })
            

    //         // if(date_publish === 0) {
    //         //     setNews({date_publish : date})
    //         // } else if(date_publish > 0) {
    //         //     setNews({update_publish : date})
    //         // }

    // }, [])
    

    const submit = (e) => {
        e.preventDefault()
        // console.log(news)
        handleSubmit(news)
    }

    // useEffect(() => {
    //     const date = new Date().toLocaleDateString()
    //             setNews({date_publish : date, update_publish : ""})
    //             if(newsData) {
    //                 setNews({date_publish : "", update_publish : date})
    //             }

    // },[])

    function handleChange(e) {
        setNews({...news, [e.target.name]: e.target.value})
    }


    function handleCategory(e) {
        setNews({...news, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
        
    }


    return(
        <form onSubmit={submit}>
            <Input 
                type='text'
                name='title'
                text='Título da notícia'
                placeholder='Digite o titulo'
                handleOnChange={handleChange}
                value={news.title ? news.title : ''}
            />  

            <Input 
                type='text'
                name='author'
                text='Jornalista'
                placeholder='Digite o nome do jornalista'
                handleOnChange={handleChange}
                value={news.author ? news.author : ''}
            />  

            {/* <Input 
                type='date'
                name='date_publish'
                text='Data'
                placeholder='Digite a data'
                handleOnChange={handleChange}
                value={news.date_publish ? news.date_publish : ''}
            />   */}

            <Select 
                name="category_id" 
                text="Selecione a categoria da notícia" 
                options={categories}
                handleOnChange={handleCategory}
                value={news.category ? news.category.id : ''}
            />

            <Input 
                type='text'
                name='subtitle'
                text='Previa da notícia'
                placeholder='Digite o titulo'
                handleOnChange={handleChange}
                value={news.subtitle ? news.subtitle : ''}
            />

            <Textarea 
                name='text'
                text='Corpo da notícia'
                placeholder='Digite a notícia'
                handleOnChange={handleChange}
                value={news.text ? news.text : ''}
            />
                
            <SubmitButton text={btnText} textTitle={btnText} />
        </form>
        
    )
}

export default NewsForm