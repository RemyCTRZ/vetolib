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

    return (
        <div className="Carnet">
            <p className='carnet-titre'>Prochains vaccins</p>
            <article className='carnet-rdv'>
                {
                    rendezVous.slice(0, 8).map((val, index) => {

                        let toto = new Date(val.rdv_date);
                        val.rdv_date = toto.toLocaleDateString("fr-FR")

                        return (
                            <p key={index}>{val.rdv_date} | {val.rdv_motif} | {val.rdv_maladie}</p>
                        );
                    })}
            </article>
        </div>
    );
};

export default Carnet;