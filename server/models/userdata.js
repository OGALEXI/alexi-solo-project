'use strict';

const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
//mongoose.ObjectId.get(v => v.toString());



//JOURNAL SCHEMA

const journalEntrySchema = new Schema({
    title: { type: String, require: false },
    date: { type: Date, default: Date.now() },
    text: { type: String, require: false },
    owner: { type: Schema.Types.ObjectId, ref: "user" } 
}, {
    timestamps: true
})

const JournalEntry = mongoose.model("journalEntry", journalEntrySchema);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
//CALENDAR SCHEMA

const calendarEntrySchema = new Schema({
    date: { type: Date, require: true },
    text: { type: String, require: false },
    user: { type: Schema.Types.ObjectId, ref: "user"}
})

const CalendarEntry = mongoose.model("calendarEntry", calendarEntrySchema);

//USER SCHEMA

const userSchema = new Schema({
    name: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true }
})

const User = mongoose.model("user", userSchema);

module.exports = { User, JournalEntry, CalendarEntry };