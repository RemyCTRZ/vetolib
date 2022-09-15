import '../style/Carnet.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

    const animal = {
        name:"Rex"
    }

function Carnet() {

    const [rendezVous, setRendezVous] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/rdv')
            .then((response) => {
                setRendezVous(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="Carnet">
            <p className='carnet-titre'>Mon carnet - {animal.name}</p>
            <article className='carnet-rdv'>
                {
                    rendezVous.slice(0, 8).map((val, index) => {

                        let toto = new Date(val.rdv_date);
                        val.rdv_date = toto.toLocaleDateString("fr-FR");

                        return (
                            <p key={index}>{val.animal_id} | {val.rdv_date} | {val.rdv_motif} | {val.rdv_maladie}</p>
                        );
                    })}
            </article>
        </div>
    );
};

export default Carnet;