import React from "react";
import './JournalEntries.css';
const moment = require('moment');

const JournalEntries = ({ el }) => {

    return (
        <div className="entries">
            <h3>{moment(el.date).format('L')}</h3>
            <h4>Note: {el.title}</h4>
        </div>
    )
}

export default JournalEntries;