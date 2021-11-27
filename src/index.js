/**
 * Main Application
 * @author Dudi Iskandar
 * 20 November 2021
 */

const env = require('dotenv');
env.config();

const express = require('express');
const parser = require('body-parser');

//  Init express
const app = express();
const port = process.env.SERVERPORT || 3000

app.use('/', (req, res) => {
    res.send(`Hello world`)
})

app.listen(port, function() {
    console.log('Server running on port:', port, 'at', new Date())
})

// username dan password database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'datain.id'
});
// end setting database connection

// menerima post dari data form add transactions di lanjutkan melakukan insert ke database
app.post('/addTransaction', (req, res) => {
    connection.query(
        'INSERT INTO data_collections (item_nama, weight, qty, grand_price) VALUES (?,?,?,?)', [req.body.item_nama, req.body.weight, req.body.qty, req.body.grand_price],
        (error, results) => {
            if (results.affectedRows) {
                req.flash('item berhasil di tambahkan ');
            } else {
                req.flash('item gagal di tambahkan')
            }
            res.redirect('/');
        }
    )
});
// end insert post dari form add transactions