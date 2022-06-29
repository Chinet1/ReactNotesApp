import React, {useEffect, useState} from "react";
import './App.css';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import {nanoid} from 'nanoid';

function App() {
    const DATA_STORAGE_ID = 'react-app-notes';

    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem(DATA_STORAGE_ID))
    );

    const [searchNote, setSearchNote] = useState('');

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem(DATA_STORAGE_ID));

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(DATA_STORAGE_ID, JSON.stringify(notes));
    }, [notes]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }

        const newNotes = [newNote, ...notes];

        setNotes(newNotes);
    }

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }

    return (
        <div className="App">
            <div className="text-center bg-gray-100 text-gray-800 py-10 px-4">
                <h1 className="text-5xl font-bold mt-0 mb-6">React Notes</h1>
                <h3 className="text-3xl font-bold mb-8">Super szybkie notatki!</h3>
                <Search handleSearch={setSearchNote}/>
            </div>
            <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} handleAddNote={addNote} handleDelete={deleteNote} />
        </div>
    );
}

export default App;
