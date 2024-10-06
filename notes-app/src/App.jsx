import NodeList from './component/NoteList'
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is your first Note",
      date: '06/10/2024'
    },
    {
      id: nanoid(),
      text: "This is your second Note",
      date: '08/10/2024'
    },
    {
      id: nanoid(),
      text: "This is your third Note",
      date: '09/10/2024'
    }
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className='container'>
      <NodeList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
