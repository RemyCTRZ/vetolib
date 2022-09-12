import "../style/Inscription.css";
import { AiOutlineRight } from "react-icons/ai";
import { GoNote } from 'react-icons/go';

function Inscription() {
    return (
        <section className="Inscription">
            <div className="card">
                <div className="card-logo-border">
                    <GoNote />
                </div>
                <p className='inscription-titre'>Inscription</p>
                <article className="inscription">
                    <input type="text" placeholder="Nom *" className="inscription-nom"></input>
                    <input type="text" placeholder="Prénom *" className="inscription-prenom"></input>
                    <input type="email" placeholder="Email *" className="inscription-email"></input>
                    <div className="password-div">
                        <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Mot de passe *" className="inscription-mdp"></input>
                        <p className="info-bulle">Votre mot de passe doit contenir au moins : <br />- 8 caractères<br />- une majuscule<br />- une minuscule<br />- un numéro</p>
                    </div>
                    <input type="password" placeholder="Confirmer le mot de passe *" className="inscription-mdp-verif"></input>
                    <p className="obligatoire">* Obligatoire</p>
                    <button className="inscription-btn">
                        <div className="inscription-front">
                            <span className="inscription-btn-label">S'inscrire</span>
                            <AiOutlineRight />
                        </div>
                    </button>
                </article>
            </div>
        </section >
    );
}

export default Inscription;