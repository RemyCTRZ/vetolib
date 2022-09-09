import dogs from "../assets/img/dogs_img.jpg";
import dogPic from "../assets/img/dogPic.png";
import "../style/Accueil.css";

function Accueil() {
    return (
        <div className="Accueil">
            <img className="img-chiens" src={dogs} alt="chiens" />
            <div className="img-chiens-shadow">
            </div>
            <section className="description">
                <p className="titre-description">Gardez un oeil sur les rendez-vous de votre animal</p>
                <article className="article">
                    <p className="txt-article">Ne manquez aucun rendez-vous avec votre carnet disponible sur notre site.
                        <br />Vous pouvez également retrouver les anciens rendez-vous dans la rubrique historique !</p>
                    <img className="img-article" src={dogPic} alt="chien" />
                </article>
            </section>
        </div>
    );
}

export default Accueil;
