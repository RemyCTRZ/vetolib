import '../style/Carnet.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
            <p className='carnet-titre'>Prochains vaccins</p>
            <article className='carnet-rdv'>
                {rendezVous.slice(0, 10).map((val) => {
                    return (
                        <p>{val.rdv_date} | {val.rdv_motif} | {val.rdv_maladie}</p>
                    );
                })}
            </article>
        </div>
    );
};

export default Carnet;