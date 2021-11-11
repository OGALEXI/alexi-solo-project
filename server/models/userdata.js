'use strict';

const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const journalEntrySchema = new Schema({
    title: { type: String, require: false },
    date: { type: Date, default: Date.now() },
    text: { type: String, require: false }
}, {
    timestamps: true
})

const JournalEntry = mongoose.model("journalEntry", journalEntrySchema);

const calendarEntrySchema = new Schema({
    date: { type: Date, require: true },
    text: { type: String, require: false }
})

const CalendarEntry = mongoose.model("calendarEntry", calendarEntrySchema);

const userSchema = new Schema({
    name: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    entries: [{ type: Schema.Types.ObjectId, ref: 'journalEntry'}],
    calendarEntries: [{ type: Schema.Types.ObjectId, ref: 'calendarEntry'}]
})

const User = mongoose.model("user", userSchema);

module.exports = { User, JournalEntry, CalendarEntry };