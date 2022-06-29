import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList=({notes, handleAddNote, handleDelete}) => {
    return (
        <div className="flex justify-content items-center flex-col bg-gray-50 p-4">
            <AddNote handleAddNote={handleAddNote} />
            {
                notes.map((note) =>
                    <Note key={note.id} id={note.id} text={note.text} date={note.date} handleDelete={handleDelete} />
                )
            }
        </div>
    )
}

export default NotesList