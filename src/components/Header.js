import logo from '../assets/img/dog_white.png';
import { AiOutlineDown } from "react-icons/ai";
import "../style/Header.css";

function Header() {
  return (
    <div className="header">
      <header>
        <nav>
          <div className='dropdown-menu closed'>
            <AiOutlineDown />
            <p className='vetolib'>VetoLib</p>
          </div>
        </nav>
        <div className='logo-border'>
          <img className='logo' src={logo} alt="logo vetolib" />
        </div>
        <div>
          <a href="/" className='login'>Se connecter</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
