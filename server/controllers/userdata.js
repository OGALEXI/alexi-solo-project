'use strict';

const { User, JournalEntry, CalendarEntry } = require('../models/userdata');
const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');

const signup = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
        return res.status(409).send('User already exists');
    }
    try {
        if (password === '') {
            throw new Error();
        }
        const hashedPass = await bcrypt.hash(password, bcrypt.genSaltSync(10));
        const newUser = new User({
            ...req.body,
            password: hashedPass
        });
        const finalUser = await newUser.save();
        req.session.uid = finalUser.id; 
        res.status(201).send(finalUser);
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
        req.session.uid = user.id;
        res.status(200).send(user);
    } catch (e) {
        console.log(e);
        res.status(401).send('Username or password is incorrect');
    }
};

const getUserProfile = async (req, res) => {
  try {
    const result = await User.findOne({
      id: req.session.uid
    }).exec();
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

const logout = (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            res.status(500).send('Could not log out, please try again.')
        } else {
            res.clearCookie('sid');
            res.sendStatus(200);
        }
    })
}

const getJournalEntries = () => {

}

const postJournalEntry = () => {

}

const getCalendarEntries = () => {

}

const postCalendarEntry = () => {

}

const editJournalEntry = () => {

}

const editCalendarEntry = () => {
    
}

module.exports = { signup, login, getUserProfile, logout };