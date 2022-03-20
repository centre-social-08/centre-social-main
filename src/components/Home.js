import LogoHome from "../img/logo-csm.png"
import Article from "./Article"
import axios from 'axios'
import {useState, useEffect} from 'react'

const Home = () => {

    const [articles, setArticles] = useState()

    useEffect(() => {

        const fetchArticles = async () => {
            const articles = await axios.get(`http://192.168.1.19:8000/api/article/`)
            setArticles(articles.data)
        }
        fetchArticles()
      }, [])

    return (
        <div className="my-10">
            <div className="flex justify-center">
            <img src={LogoHome} alt="Home Logo" width="450" height="450"/>
            </div>
            <div>
                <p className="text-4xl text-center">LES ACTUALITÉS</p>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 
                md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                { articles && articles.map( article => 
                <Article 
                key={article.id} 
                title={article.title} 
                // content={article.content.substring(0, 100) + '...'}
                content={article.content}
                date={article.created_at} />)}
                </div>
            </div>
        </div>
    )
}

export default Home 