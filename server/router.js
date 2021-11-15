'use strict';

const { Router } = require('express');
const userData = require('./controllers/userdata');
const router = new Router();
const authMiddleware = require('./middlewares/auth');

router.post('/signup', userData.signup);
router.post('/login', userData.login);
router.get('/profile', authMiddleware, userData.getUserProfile);
router.post('/logout', authMiddleware, userData.logout);

module.exports = router;