import "../style/Profil.css";

function Profil() {
    return (
        <div className="Profil">
            <p className='profil-titre'>Profil</p>
            <section className="profil">
                <article className="maitre-profil">
                    <p className="maitre-nom">NOM : </p>
                    <p className="maitre-prenom">Prénom : </p>
                    <p className="maitre-email">Email : </p>
                </article>
                <article className="animaux-profil">
                    <p className="animaux-liste">Animaux</p>
                    <p className="animal-1">Rex, (Berger Allemand)</p>
                    <p className="animal-2">Rex, (Berger Allemand)</p>
                    <p className="animal-3">Rex, (Berger Allemand)</p>
                    <p className="animal-4">Rex, (Berger Allemand)</p>
                    <p className="animal-5">Rex, (Berger Allemand)</p>
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