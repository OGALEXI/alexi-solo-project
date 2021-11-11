'use strict';

const { User, JournalEntry, CalendarEntry } = require('../models/userdata');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
        return res.status(409).send({ error: '409', message: 'User already exists'});
    }
    try {
        if (password === '') {
            throw new Error();
        }
        const hash = await bcrypt.hash(password, bcrypt.genSaltSync(10));
        const newUser = new User({
            ...req.body,
            password: hash
        });
        const user = await newUser.save();
        req.session.uid = user._id;
        res.status(201).send(user);
    } catch (e) {
        console.log(e);
        res.status(400).send('Could not create user');
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error();
        }
        req.session.uid = user._id;
        res.status(200).send(user);
    } catch (e) {
        console.log(e);
        res.status(401).send('Username or password is incorrect');
    }
};

const userHomepage = async (req, res) => {
  try {
    const { _id, name } = req.user;
    const user = { _id, name };
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.status(404).send('User not found');
  }
};


module.exports = { signup, login, userHomepage };