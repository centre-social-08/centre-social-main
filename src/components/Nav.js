import NavLogo from '../img/logo-csm-2.png'
import {
    Link
  } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex h-12 items-center justify-between p-10">
            <div className="flex">
            <img src={NavLogo} alt="Logo" height="30" width="30"/>
            <p className="font-bold p-1 text-xl"> Csm-Webradio</p>
            </div>
            <ul className="flex flex-1 justify-around">
            <li className="hover:underline hover:text-yellow-400">
              <Link to="/">Accueil</Link>
            </li>
            <li className="hover:underline hover:text-yellow-400">
              <Link to="/podcasts">Podcasts</Link>
            </li>
            <li className="hover:underline hover:text-yellow-400">
              <Link to="/live">Direct</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            </ul>
            <div>
            <a href="/">Connexion</a>
            </div>
        </nav>
    )
}

export default Nav
