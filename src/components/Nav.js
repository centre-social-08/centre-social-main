import NavLogo from "../img/logo-csm-2.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router";

const Nav = ({ hasToken, setHasToken }) => {
  const history = useHistory();

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/logout").then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        history.push("/");
        setHasToken(false);
      }
    });
  };

  let ConnectionButton = (
    <div>
      <button className="bg-yellow-400 text-black rounded-xl p-2">
        <Link to="/login">Connexion</Link>
      </button>
    </div>
  );

  let DeconnectionButton = (
    <div>
      <button
        onClick={logoutSubmit}
        className="bg-yellow-400 text-black rounded-xl p-2"
      >
        Déconnexion
      </button>
    </div>
  );

  return (
    <nav className="flex text-xl h-10 p-10 items-center justify-between bg-black text-yellow-400">
      <div className="flex">
        <img
          src={NavLogo}
          alt="Logo"
          height="30"
          width="30"
          className="object-scale-down"
        />
        <p className="font-bold p-1 text-xl"> CSM-Webradio</p>
      </div>
      <ul className="flex flex-1 justify-around">
        <li className="hover:underline hover:text-white">
          <Link to="/">Accueil</Link>
        </li>
        <li className="hover:underline hover:text-white">
          <Link to="/podcasts">Podcasts</Link>
        </li>
        <li className="hover:underline hover:text-white">
          <Link to="/live">Direct</Link>
        </li>
        <li className="hover:underline hover:text-white">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {hasToken ? DeconnectionButton : ConnectionButton}
    </nav>
  );
};

export default Nav;
