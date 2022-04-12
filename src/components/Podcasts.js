import { useEffect, useState } from 'react';
import axios from 'axios'
import LogoHome from '../img/logo-csm.png'
import Podcast from './Podcast'
import AddPodcast from './AddPodcast';


const Podcasts = ({hasToken}) => {

    const [podcasts, setPodcasts] = useState();

    useEffect(() => {

        const fetchPodcasts = async () => {
            const articles = await axios.get(`/api/podcast/`)
            setPodcasts(articles.data)
        }
        fetchPodcasts()
      }, [])

    return (
        <div>
            <div className="my-10">
            <div className="flex justify-center">
            <img src={LogoHome} alt="Home Logo" width="450" height="450"/>
            </div>
            <div>
                <p className="text-4xl text-center">LES PODCASTS</p>
                { hasToken ? <AddPodcast/> : '' }
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                { podcasts && podcasts.map( podcast => <Podcast key={podcast.id} id={podcast.id} title={podcast.title} content={podcast.content} date={podcast.created_at} hasToken={hasToken}/>) }
                </div>
            </div>
        </div>
        </div>
    )
}

export default Podcasts
