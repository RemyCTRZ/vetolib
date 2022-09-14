import "../style/ProgRDV.css";
import { useState, useEffect } from "react";
import axios from "axios";

function ProgRDV() {

    const [idAnimal, setIdAnimal] = useState('');
    const [idVet, setIdVet] = useState('');
    const [rdvDate, setRdvDate] = useState('');
    const [rdvMotif, setRdvMotif] = useState('');
    const [rdvMaladie, setRdvMaladie] = useState('');

    const programmerRdv = () => {
        axios.post('http://localhost:3001/api/insert',
            { animal_id: idAnimal, vet_id: idVet, rdv_date: rdvDate, rdv_motif: rdvMotif, rdv_maladie: rdvMaladie })
            .then(() => {
                alert('Successful insert');
            }).catch(() => {
                alert('Failed insert');
            });
    }

    return (
        <div className="ProgRDV">
            <div className="progRDV">
                <p className='progRDV-titre'>Programmer un rendez-vous</p>
                <input type="text" placeholder="Animal" className="progRDV-nomMaitre" onChange={(e) => {
                    setIdAnimal(e.target.value)
                }}></input>
                <input type="text" placeholder="Vétérinaire" className="progRDV-animal" onChange={(e) => {
                    setIdVet(e.target.value)
                }}></input>
                <div className="three-inputs">
                    <input type="date" className="progRDV-date" onChange={(e) => {
                        setRdvDate(e.target.value)
                    }}></input>
                    <input type="text" placeholder="Motif" className="progRDV-motif" onChange={(e) => {
                        setRdvMotif(e.target.value)
                    }}></input>
                    <input type="text" placeholder="Maladie" className="progRDV-maladie" onChange={(e) => {
                        setRdvMaladie(e.target.value)
                    }}></input>
                </div>
                <button className="progRDV-envoyer" onClick={programmerRdv}>
                    <span className="front-prog">Envoyer</span>
                </button>
            </div>
        </div>
    );
}

export default ProgRDV;