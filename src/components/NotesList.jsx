import  { useEffect } from 'react';
import noteService from '../services/noteService';
import { FaTrashCan } from "react-icons/fa6";


function NotesList({ notes, setNotes}) {
    

    useEffect(() => {
        noteService.getNotes().then(res => {
            setNotes(res);
        });
    }, []);

    const handleDelete = (id) => {
        noteService.deleteNote(id).then((_) => {
            setNotes(notes.filter((note) => note.id !== id));
        });
    };

  return (
   <div className=''>
     <ul className=' flex flex-col  text-white border-slate-500'>
        {notes.map((note) => (
            <li className='flex items-center justify-between mx-5' key={note.id}> • {note.content}{""}
                <button onClick={() => handleDelete (note.id)} className='text-red-500 '>
                    <FaTrashCan />
                </button>
            </li>
        ))}
    </ul>
   </div>
  )
}

export default NotesList;