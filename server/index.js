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
    });
});

app.get('/api/rdv', (req, res) => {

    const sqlSelect = "SELECT rdv_date, rdv_motif, rdv_maladie FROM rdv;";

    db.query(sqlSelect, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
});

app.listen(3001, () => {
    console.log('running on port 3001');
});