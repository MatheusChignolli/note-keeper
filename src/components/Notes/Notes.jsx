import React, { useState } from 'react';
import './styles.css';

import Note from './Note';
import Input from '../Input';

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(obj) {
    setNotes([...notes, obj])
    console.log(notes);
  }

  function deleNote(id) {

    var newNotes = [];

    notes.forEach((obj, i) => {
      if(i !== id) {
        newNotes.push(obj);  
      }
    });

    setNotes(newNotes)
  }

  return (
    <>
      <div className="input-body">
        <Input addItem={addNote} />
      </div>
      <div className={"content-body"}>
        {
          notes.map((obj, i) => 
            <Note deleteItem={deleNote} id={i} key={`note-${i}`} h1={obj.nTitle} content={obj.nText} />
          )
        }
      </div>   
    </>
  );
}

export default App;
