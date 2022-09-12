import { NavLink } from "react-router-dom";
import "../style/Connexion.css";

function Connexion() {
    return (
        <div className="Connexion" id="Connexion">
            <div className="connexion-email">
                <p className="connexion-email-txt">Email :</p>
                <input type="email" placeholder="exemple@mail.fr"></input>
            </div>
            <div className="connexion-mdp">
                <p className="connexion-mdp-txt">Mot de passe :</p>
                <input type="password"></input>
            </div>
                <NavLink className="link-inscription" to="/inscription">Inscription</NavLink>
                <a className="mdp-oublie" href="/">Mot de passe oublié</a>
        </div>
    );
}

export default Connexion;