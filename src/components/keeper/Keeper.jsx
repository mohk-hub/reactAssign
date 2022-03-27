import React, { useState } from 'react'
import { CreateArea } from '../createarea/CreateArea';
import { Notes } from '../notes/Notes';

export const Keeper = () => {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <div>
                <CreateArea onAdd={addNote} />
                {notes.map((noteItem, index) => {
                    return (
                        <Notes
                            key={index}
                            id={index}
                            title={noteItem.title}
                            content={noteItem.content}
                            onDelete={deleteNote}
                        />
                    );
                })}
            </div>
        </>
    )
}
