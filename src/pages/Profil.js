import "../style/Profil.css";
import { useEffect, useState } from "react";
import axios from "axios";

const user = {
    id: 1,
    isAdmin: true,
    isConnected: true,
    nom: "Cottrez",
    prenom: "Rémy",
    email: "remycottrez@gmail.com"
}

function Profil() {

    const [idAnimal, setIdAnimal] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:3001/api/delete-animal',
            { id: idAnimal})
            .then(() => {
                alert('Successful delete');
            }).catch(() => {
                alert('Failed delete');
            });
    }, []);

    return (
        <div className="Profil">
            <p className='profil-titre'>Profil</p>
            <section className="profil">
                <article className="maitre-profil">
                    <p className="maitre-nom">NOM : {user.nom}</p>
                    <p className="maitre-prenom">Prénom : {user.prenom}</p>
                    <p className="maitre-email">Email : {user.email}</p>
                </article>
                <article className="animaux-profil">
                    <p className="animaux-liste">Animaux</p>
                    <p className="animal-1">Tigrou, (Chat Angora)</p>
                    <p className="animal-2">Rex, (Berger Allemand)</p>
                </article>
            </section>
            <button className="modif-profil">Modifier mes infos</button>
            <button className="deconnexion">
                <span className="front">Déconnexion</span>
            </button>
        </div>
    );
}

export default Profil;