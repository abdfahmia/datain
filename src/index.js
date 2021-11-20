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

app.use('/', (req, res)=> {
    res.send("Hello World")
})

app.listen(port, function () {
    console.log('Server running on port:', port, 'at', new Date())
})