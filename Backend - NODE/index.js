// Importación de EXPRESS, y demás implementaciones
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();


// MIDDLEWARES
app.use(cors());
app.use(express.json());


// CONEXION BASE DE DATOS MYSQL = DATABASE (cognitusdb)
const db = mysql.createConnection({
    user: 'root',
    password: '',
    host: 'localhost',
    database: 'cognitusdb'
});



// END POINTS - get, post, put, delete...
// END POINT - POST
app.post('/create', (req, res) => {

    const name = req.body.name;
    const lastname = req.body.lastname;

    db.query("INSERT INTO integrantes (name, lastname) VALUES (?, ?)", [name, lastname]),
    (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.send('Se han añadido Correctamente los datos a la BD!');
        }

    };
});

// END POINT GET
app.get('/integrantes', (req, res) => {

    db.query("SELECT * FROM integrantes", (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.send(results);
        }
    }); 
});


// ESCUCHA DEL SERVIDOR - Server listen
app.listen(3001, () => {
    console.log(`Server listen on port 3001`);
})
