const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const pg = require('pg');

const config = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    res.status(400).json({ error: err.message });
});

app.use(express.static(config.frontend));

let pgClient = null;
const api = '/api/';
const itemsSuffix = 'items';

app.get(api + itemsSuffix, (req, res) => {
    pgClient.query('SELECT * FROM inventory', [], (err, data) => {
        if (err) {
            console.error('Error fetching items:', err);
            res.status(500).json({ error: 'Failed to fetch items' });
        } else {
            res.json(data.rows);
        }
    });
});

app.get(api + itemsSuffix + '/:id', (req, res) => {
    const { id } = req.params;
    pgClient.query('SELECT * FROM inventory WHERE id = $1', [id], (err, data) => {
        if (err) {
            console.error('Error fetching item:', err);
            res.status(500).json({ error: 'Failed to fetch item' });
        } else if (data.rows.length === 0) {
            res.status(404).json({ error: 'Item not found' });
        } else {
            res.json(data.rows[0]);
        }
    });
});

app.post(api + itemsSuffix, (req, res) => {
    const { name, notes } = req.body;
    const parameters = [name, notes || '', 'free'];
    pgClient.query('INSERT INTO inventory (name, notes, state) VALUES ($1, $2, $3) RETURNING *', parameters, (err, data) => {
        if (err) {
            console.error('Error adding item:', err);
            res.status(500).json({ error: 'Failed to add item' });
        } else {
            res.status(201).json(data.rows[0]);
        }
    });
});

app.put(api + itemsSuffix + '/:id/notes', (req, res) => {
    const { id } = req.params;
    const { notes } = req.body;
    pgClient.query('SELECT * FROM inventory WHERE id = $1', [id], (err, data) => {
        if (err) {
            console.error('Error fetching item:', err);
            res.status(500).json({ error: 'Failed to fetch item' });
        } else if (data.rows.length === 0) {
            res.status(404).json({ error: 'Item not found' });
        } else if (data.rows[0].state === 'free') {
            res.status(400).json({ error: 'Cannot edit notes for items in free state' });
        } else {
            pgClient.query('UPDATE inventory SET notes = $1 WHERE id = $2 RETURNING *', [notes, id], (err, data) => {
                if (err) {
                    console.error('Error updating notes:', err);
                    res.status(500).json({ error: 'Failed to update notes' });
                } else {
                    res.json(data.rows[0]);
                }
            });
        }
    });
});

app.listen(config.port, () => {
    pgClient = new pg.Client(config.db);
    pgClient.connect().catch(err => {
        console.error('Error connecting to database:', err);
        process.exit(0);
    });
    console.log('DB connected, backend is listening on port', config.port);
});