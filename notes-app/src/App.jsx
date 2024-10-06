import NodeList from './component/NoteList'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './component/search';
import Header from './component/Header';

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
  const [SearchText, setSearchText] = useState('');
  const [DarkMode, setDarkMode] = useState(false);
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

  const deleteNote = (id)=>{
    const newNotes = notes.filter((note)=> note.id != id);
    setNotes(newNotes);
  }

  return (
    <div className={`${DarkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleDarkMode={setDarkMode}/>
      <Search handleSearchNote = {setSearchText}/>
      <NodeList notes={notes.filter((note)=>
       note.text.toLowerCase().includes(SearchText))} 
      handleAddNote={addNote} 
      handleDeleteNote = {deleteNote}
      />
    </div>
    </div>
  );
}

export default App;
