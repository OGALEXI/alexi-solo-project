import React, { useState } from "react";
import ApiService from "../../ApiService";
import './Journal.css';

const initialState = {
    title: '',
    text: ''
}

const Journal = () => {
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        const { item, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [item]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { title, text } = state;
        const entry = { title, text };
        const res = await ApiService.createJournalEntry(entry);

        if (res.error) {
            alert(`${res.message}`);
            setState(initialState);
        } else {
            setState(res);
        }
    }

    return (
        <div>
            <div className="entry-container">ALL ENTRIES</div>
            <form className="journal-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title..." 
                    className="title" 
                    name="title" 
                    value={state.title} 
                    onChange={handleChange}
                />
                <button className="entry-submit" type="submit">Add a new note</button>
                <input 
                    type="text" 
                    placeholder="Type text here..." 
                    className="text" 
                    name="text" 
                    value={state.text} 
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Journal;