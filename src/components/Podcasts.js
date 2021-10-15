import LogoHome from '../img/logo-csm.png'
import Podcast from './Podcast'

const Podcasts = () => {
    return (
        <div>
            <div className="my-10">
            <div className="flex justify-center">
            <img src={LogoHome} alt="Home Logo" width="450" height="450"/>
            </div>
            <div>
                <p className="text-4xl text-center">LES PODCASTS</p>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                <Podcast/>
                <Podcast/>
                <Podcast/>
                <Podcast/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Podcasts
