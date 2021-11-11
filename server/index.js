'use strict';

const express = require('express');
const cors = require('cors');
const router = require('./router');
const newMongooseDB = require('./models');

const app = new express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);

const PORT = 3000;

(async () => {
    try {
        await newMongooseDB;
        app.listen(PORT, () => console.log(`Server is UP: ${PORT}`));
    } catch(e) {
        console.log(e);
    }
})()