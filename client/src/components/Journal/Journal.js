import React, { useState, useEffect } from "react";
import ApiService from "../../ApiService";
import JournalEntries from "../JournalEntries/JournalEntries";
import './Journal.css';

const Journal = () => {
    const [jTitle, setJTitle] = useState('');
    const [jText, setJText] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const getEntries = async () => {
            try {
                const userEntries = await ApiService.getJournalEntries();
                setList(userEntries);
                
            } catch (e) {
                console.log('Could not GET', e);
            }
        }
        getEntries();
    }, [list]); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await ApiService.createJournalEntry(jTitle, jText);

        if (res.error) {
            alert(`${res.message}`);
            setJTitle('');
            setJText('');
        } else {
            setJTitle(jTitle);
            setJText(jText);
        }
    }

    return (
        <div>
            <div className="entry-container">
                <div className="new-note">Add New Note +</div>
                <div className="journal-item">
                    {list.map(el => (<JournalEntries key={el._id} el={el}/>))}
                </div>
            </div>
            <form className="journal-form" onSubmit={handleSubmit}>
                <div className="top-bar">
                    <input 
                    type="text" 
                    placeholder="Title..." 
                    className="entry-title"
                    value={jTitle} 
                    onChange={(e) => {
                            setJTitle(e.target.value);
                        }}
                    />
                    <button className="entry-submit" type="submit">Add a new note</button>
                </div>
                <div className="entry-input">
                    <input
                        className="note"
                        type="text"  
                        placeholder="Type text here..."
                        value={jText} 
                        onChange={(e) => {
                            setJText(e.target.value);
                        }}
                    />
                </div>
            </form>
        </div>
    )
}

export default Journal;