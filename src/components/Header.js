import logo from '../assets/img/dog_white.png';
import { AiOutlineDown } from "react-icons/ai";
import "../style/Header.css";
import { NavLink } from 'react-router-dom';
import { Open } from "../components/Animations";
import Connexion from './Connexion';
import { Login } from '../components/Animations';

function Header() {

  const user = {
    id: 1,
    isAdmin: false,
    isConnected: true,
    name: "Rémy"
  }

  return (
    <div className="header">
      <header>
        <nav>
          <div className='dropdown-all'>

            <div className='dropdown-menu' onClick={Open}>
              <AiOutlineDown />
              <NavLink className='vetolib' to="/">VetoLib</NavLink>
            </div>
            {user.isAdmin ? (
              <div className='dropdown' id="dropdown">
                <NavLink className='carnet-link' to="/rdv-veterinaire">Mes rendez-vous</NavLink>
                <NavLink className='prog-rdv-link' to="/programmer-rdv">Programmer un RDV</NavLink>
              </div>
            ) : (
              <div className='dropdown' id="dropdown">
                <NavLink className='carnet-link' to="/carnet">Mon carnet</NavLink>
                <NavLink to="/contact" className='contact-link'>Contact</NavLink>
              </div>
            )}

          </div>
        </nav>
        <div className='logo-border'>
          <img className='logo' src={logo} alt="logo vetolib" />
        </div>
        {user.isConnected ? (
        <div>
          <p className='logged' id="login" onClick={Login}>Bonjour <span className='username'>{user.name}</span></p>
        </div>
        ) : (
        <div>
          <button className='login' id="login" onClick={Login}>Se connecter</button>
          <Connexion />
        </div>
        )}
      </header>
    </div>
  );
}

export default Header;
