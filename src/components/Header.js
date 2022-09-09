import logo from '../assets/img/dog_white.png';
import { AiOutlineDown } from "react-icons/ai";
import "../style/Header.css";
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <header>
        <nav>
          <div className='dropdown-all'>
            <div className='dropdown-menu closed'>
              <AiOutlineDown />
              <NavLink className='vetolib' to="/">VetoLib</NavLink>
            </div>
            <div className='dropdown closed'>
              <NavLink className='carnet-link' to="/carnet">Mon carnet</NavLink>
              <NavLink className='historique-link' to="/historique">Mon historique</NavLink>
              <NavLink to="/contact" className='contact-link'>Contact</NavLink>
            </div>
          </div>
        </nav>
        <div className='logo-border'>
          <img className='logo' src={logo} alt="logo vetolib" />
        </div>
        <div>
          <a className='login' href="/">S'inscrire</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
