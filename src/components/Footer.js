import "../style/Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            <div className="liens-footer">
                <NavLink to="/carnet" className='footer-carnet'>Mon carnet</NavLink>
                <NavLink to="/profil" className='footer-profil'>Mon profil</NavLink>
                <NavLink to="/contact" className='footer-contact'>Contact</NavLink>
            </div>
            <p className="txt-footer">Développé par Rémy Cottrez | 2022</p>
        </div>
    );
}

export default Footer;