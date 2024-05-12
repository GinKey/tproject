const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

//accept left
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'yourdatabase'
});

db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");

    const createActivityLogTableQuery = `
    CREATE TABLE IF NOT EXISTS activity_log (
      id INT AUTO_INCREMENT PRIMARY KEY,
      action VARCHAR(255) NOT NULL,
      collection VARCHAR(255),
      action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      user VARCHAR(255) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8`;

    db.query(createActivityLogTableQuery, error => {
        if (error) throw error;
        console.log("Table 'activity_log' is ready.");
    });

    const createParticipantsTableQuery = `
    CREATE TABLE IF NOT EXISTS participants (
        id INT AUTO_INCREMENT PRIMARY KEY,
        gender CHAR(1),
        first_name VARCHAR(255) NOT NULL,
        middle_name VARCHAR(255),
        last_name VARCHAR(255) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8`;

    db.query(createParticipantsTableQuery, error => {
        if (error) throw error;
        console.log("Table 'participants' is ready.");
    });
});

app.post('/activity', (req, res) => {
    const query = 'INSERT INTO activity_log SET ?';
    const values = req.body;

    db.query(query, values, (error, results) => {
        if (error) throw error;
        res.send(`Activity added with ID: ${results.insertId}`);
    });
});

app.get('/activity', (req, res) => {
    const query = 'SELECT * FROM activity_log ORDER BY action_time DESC';

    db.query(query, (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.get('/participants', (req, res) => {
    db.query('SELECT * FROM participants', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.post('/participants', (req, res) => {
    const data = req.body;
    const query = 'INSERT INTO participants SET ?';

    db.query(query, data, (error, results) => {
        if (error) throw error;
        res.status(201).send(`Participant added with ID: ${results.insertId}`);
    });
});

app.delete('/participants/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM participants WHERE id = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).send('Ошибка при удалении участника');
        }
        res.send('Участник удален');
    });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
