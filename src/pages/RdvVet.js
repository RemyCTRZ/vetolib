import '../style/Carnet.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Carnet() {

    const [rendezVous, setRendezVous] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/rdv-veterinaire')
            .then((response) => {
                setRendezVous(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const [animalName, setAnimalName] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/get-animal-name')
            .then((response) => {
                setAnimalName(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <div className="Carnet">
            <p className='carnet-titre'>Mes rendez-vous</p>
            <article className='carnet-rdv'>
                <div className='animal-names'>
                    {
                        animalName.slice(-8).map((val, index) => {

                            return (
                                <p key={index}>{val.animal_nom}</p>
                            );

                        })}
                </div>
                <div className='rdv-infos'>
                    {
                        rendezVous.slice(-8).map((val, index) => {

                            let toto = new Date(val.rdv_date);
                            val.rdv_date = toto.toLocaleDateString("fr-FR")

                            return (
                                <p key={index}><span className='date_rdv'>{val.rdv_date}</span> {val.rdv_motif} | {val.rdv_maladie}</p>
                            );

                        })}
                </div>
            </article>
        </div>
    );
};

export default Carnet;