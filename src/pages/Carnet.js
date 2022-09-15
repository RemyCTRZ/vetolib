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

    // DIFFERENCE ENTRE 2 DATES POUR MAIL
    
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// test it
const a = new Date("2017-01-01"),
    b = new Date("2017-07-25"),
    difference = dateDiffInDays(a, b);
    console.log(difference);

    return (
        <div className="Carnet">
            <p className='carnet-titre'>Mon carnet</p>
            <article className='carnet-rdv'>
                {
                    rendezVous.slice(-8).map((val, index) => {

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