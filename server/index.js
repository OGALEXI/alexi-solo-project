'use strict';

const express = require('express');
const cors = require('cors');
const router = require('./router');
const newMongooseDB = require('./models');
const session = require('express-session');

const app = new express();
const corsConfig = {
    origin: 'http://localhost:3000',
    credentials: true
};

app.use(cors(corsConfig));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(
    session({
        name: 'sid',
        secret: 'Noot',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 8,
            sameSite: true,
            httpOnly: false,
            secure: false
        }
    })
)

app.use(router);

const PORT = 3001;

(async () => {
    try {
        await newMongooseDB;
        app.listen(PORT, () => console.log(`Server is UP: ${PORT}`));
    } catch (err) {
        console.log(err);
    }
})();