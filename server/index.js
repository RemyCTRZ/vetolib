const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "4NVldcbwlcUkrUBDgAtJ",
    database: "VetoLib",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/insert', (req, res) => {

    const animal_id = req.body.animal_id;
    const vet_id = req.body.vet_id;
    const rdv_date = req.body.rdv_date;
    const rdv_motif = req.body.rdv_motif;
    const rdv_maladie = req.body.rdv_maladie;

    const sqlInsert = "INSERT INTO rdv (animal_id, vet_id, rdv_date, rdv_motif, rdv_maladie) VALUES (?,?,?,?,?);";

    db.query(sqlInsert, [animal_id, vet_id, rdv_date, rdv_motif, rdv_maladie], (err, result) => {
        console.log(result);
        console.log("Rendez-vous programmé");
    });
});

app.post('/api/delete-animal', (req, res) => {

    const id = req.body.id;

    const sqlDelete = "DELETE FROM animal WHERE ID = (?)";

    db.query(sqlDelete, [id], (err, result) => {
        console.log(result);
        console.log("Animal supprimé");
    });
});

app.post('/api/signup', (req, res) => {

    const maitre_nom = req.body.maitre_nom;
    const maitre_prenom = req.body.maitre_prenom;
    const maitre_email = req.body.maitre_email;
    const maitre_mdp = req.body.maitre_mdp;

    const sqlSignup = "INSERT INTO maitre (maitre_nom, maitre_prenom, maitre_email, maitre_mdp) VALUES (?,?,?,?);";

    db.query(sqlSignup, [maitre_nom, maitre_prenom, maitre_email, maitre_mdp], (err, result) => {
        console.log(result);
        console.log("Profil créé");
    });
});

app.get('/api/rdv', (req, res) => {

    const sqlSelect = "SELECT animal_id, rdv_date, rdv_motif, rdv_maladie FROM rdv;";

    db.query(sqlSelect, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
});

app.get('/api/rdv-veterinaire', (req, res) => {

    const sqlSelect = "SELECT rdv_date, rdv_motif, rdv_maladie FROM rdv INNER JOIN veterinaire WHERE veterinaire.id = rdv.vet_id";

    db.query(sqlSelect, (err, result) => {
        if (err) throw err;
        res.json(result);
    })

});

app.get('/api/get-animal-name', (req, res) => {

    const sqlSelectAnimalName = "SELECT animal_nom FROM animal INNER JOIN rdv WHERE animal.id = rdv.animal_id;";

    db.query(sqlSelectAnimalName, (err, result) => {
        if (err) throw err;
        res.json(result);
        console.log(result);
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
});