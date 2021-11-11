'use strict';

const { Router } = require('express');
const userData = require('./controllers/userdata');
const router = new Router();
const authMiddleware = require('./middlewares/auth');

router.post('/signup', userData.signup);
router.post('/login', userData.login);
router.get('/userhomepage', authMiddleware, userData.userHomepage);

module.exports = router;