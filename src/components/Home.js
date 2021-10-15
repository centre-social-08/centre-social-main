import LogoHome from "../img/logo-csm.png"
import Card from "./Card"

const Home = () => {
    return (
        <div className="my-10">
            <div className="flex justify-center">
            <img src={LogoHome} alt="Home Logo" width="450" height="450"/>
            </div>
            <div>
                <p className="text-4xl text-center">LES ACTUALITÉS</p>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
        </div>
    )
}

export default Home

