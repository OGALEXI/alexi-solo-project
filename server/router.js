'use strict';

const { Router } = require('express');
const { User, JournalEntry, CalendarEntry } = require('./models/userdata');
//const userData = require('./controllers/userdata');
const mongoose = require('mongoose');
const foreignId = mongoose.Types.ObjectId;
const router = new Router();

router.get('/testroute', async (req, res) => {

    const users = [
        {
            name: "bob",
            username: "Bobby5",
            entries: [
                {
                    title: "entry 1",
                    text: "Bla Bla Bla"
                },
                {
                    title: "entry 2",
                    text: "Bla Bla Bla"
                },
                {
                    title: "entry 3",
                    text: "Bla Bla Bla"
                }
            ]
        },
        {
            name: "Cob",
            username: "Cobby5",
            entries: [
                {
                    title: "Cob entry 1",
                    text: "Bla Bla Bla"
                },
                {
                    title: "Cob entry 2",
                    text: "Bla Bla Bla"
                },
                {
                    title: "Cob entry 3",
                    text: "Bla Bla Bla"
                }
            ]
        }
    ]

    const newUsers = await User.create(users);
    res.json(newUsers);


     /* const users = [
        { name: "Bob" },
        { name: "Cob" },
        { name: "Slob" }
    ]

    const entries = [
        { title: "Day one"},
        { title: "Day two"},
        { title: "Day three"}
    ]

    const newUsers = await User.create(users);
    const newEntries = await JournalEntry.create(entries);

    res.json({ newUsers, newEntries }); */
})

/* router.get('/homepage/:user/:journal', async (req, res) => {
    req.params.journal = foreignId(req.params.journal);
    const user = await User.findById(req.params.user);
    user.journal = req.params.journal;
    user.save();
    res.json(user);
})
 */
module.exports = router;