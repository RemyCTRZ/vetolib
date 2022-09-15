import "../style/Inscription.css";
import { AiOutlineRight } from "react-icons/ai";
import { GoNote } from 'react-icons/go';
import axios from "axios";
import { useState } from "react";
import Accueil from "../pages/Accueil"

function Inscription() {

    const [nomMaitre, setNomMaitre] = useState('');
    const [prenomMaitre, setPrenomMaitre] = useState('');
    const [emailMaitre, setEmailMaitre] = useState('');
    const [mdpMaitre, setMdpMaitre] = useState('');

    const inscrire = () => {
        axios.post('http://localhost:3001/api/signup',
            { maitre_nom: nomMaitre, maitre_prenom: prenomMaitre, maitre_email: emailMaitre, maitre_mdp: mdpMaitre })
            .then(() => {
                alert('Successful insert');
            }).catch(() => {
                alert('Failed insert');
            });
    }

    const user = {
        id: 1,
        isAdmin: true,
        isConnected: true,
        name: "Rémy"
    }

    return (
        < section className="Inscription" >
            {
                user.isConnected ? (
                    <Accueil />
                ) : (
                    <div className="card">
                        <div className="card-logo-border">
                            <GoNote />
                        </div>
                        <p className='inscription-titre'>Inscription</p>
                        <article className="inscription">
                            <input type="text" placeholder="Nom *" className="inscription-nom" onChange={(e) => {
                                setNomMaitre(e.target.value)
                            }}></input>
                            <input type="text" placeholder="Prénom *" className="inscription-prenom" onChange={(e) => {
                                setPrenomMaitre(e.target.value)
                            }}></input>
                            <input type="email" placeholder="Email *" className="inscription-email" onChange={(e) => {
                                setEmailMaitre(e.target.value)
                            }}></input>
                            <div className="password-div">
                                <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Mot de passe *" className="inscription-mdp" onChange={(e) => {
                                    setMdpMaitre(e.target.value)
                                }}></input>
                                <p className="info-bulle">Votre mot de passe doit contenir au moins : <br />- 8 caractères<br />- une majuscule (A - Z)<br />- une minuscule (a - z)<br />- un numéro (0 - 9)</p>
                            </div>
                            <input type="password" placeholder="Confirmer le mot de passe *" className="inscription-mdp-verif"></input>
                            <p className="obligatoire">* Obligatoire</p>
                            <button className="inscription-btn" onClick={inscrire}>
                                <div className="inscription-front">
                                    <span className="inscription-btn-label">S'inscrire</span>
                                    <AiOutlineRight />
                                </div>
                            </button>
                        </article>
                    </div>
                )}
        </section >
    );
}

export default Inscription;