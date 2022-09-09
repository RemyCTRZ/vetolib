import "../style/ProgRDV.css";

function ProgRDV() {
    return (
        <div className="ProgRDV">
            <div className="progRDV">
                <p className='progRDV-titre'>Programmer un rendez-vous</p>
                <input type="text" placeholder="Nom du maître" className="progRDV-nomMaitre"></input>
                <input type="text" placeholder="Animal" className="progRDV-animal"></input>
                <div className="three-inputs">
                    <input type="date" className="progRDV-date"></input>
                    <input type="text" placeholder="Motif" className="progRDV-motif"></input>
                    <input type="text" placeholder="Maladie" className="progRDV-maladie"></input>
                </div>
                <button className="progRDV-envoyer">
                    <span className="front-prog">Envoyer</span>
                </button>
            </div>
        </div>
    );
}

export default ProgRDV;