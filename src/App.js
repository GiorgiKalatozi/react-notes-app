import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is my first note!", date: "26/12/2021" },
    { id: nanoid(), text: "This is my second note!", date: "27/12/2021" },
    { id: nanoid(), text: "This is my third note!", date: "28/12/2021" },
    { id: nanoid(), text: "This is my fourth note!", date: "1/01/2022" },
  ]);

  const addNote = (text) => {
    console.log(text);
  };

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
};

export default App;
