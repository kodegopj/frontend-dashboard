import { useState } from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import NotesList from '../components/NotesList';

import noteService from '../services/noteService';
import bgnote from '../assets/bg-note.jpg'


function Note() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteObj = {
      content: newNote,
    };

    noteService.createNote(noteObj).then((res) => {
      setNotes(notes.concat(res));
      setNewNote("");
    });
  };

  return (
    <>
    <div className='bgcolor'>
    <Navbar/>
    <Box height={55}/>
      <Box sx={{ display: "flex"}}>
           <Sidenav/>
           <Box height={70}/>
        <Box component="main" sx={{ flexGrow: 1, px: 1   }}>
        {/* <Grid container spacing={2}>          */}
          <Grid item xs={8}>
            <Card sx={{ height: 90 +"vh" }}>
            <img src={bgnote} className='bg-note' />
            
              <div className='note m-20 flex  items-center justify-center'>               
                <div className='notes border  my-1 py-4 px-6 flex flex-col gap-2'>
                <h1 className='text-white font-bold'>Notes to remember!</h1>
                  <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <div>
                      <input 
                        type="text" 
                        value={newNote}
                        className='border-solid border-2 p-2 w-full '
                        onChange={(e) => setNewNote(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='bg-blue-500 p-2 my-2 font-bold text-white'>
                      save note
                    </button>
                  </form>
                   <NotesList notes={notes} setNotes={setNotes}/>
                </div>
              </div>
            </Card>
          </Grid>
          {/* <Grid item xs={4}>
            <Card sx={{ height: 90 +"vh" }}>
              <CardContent>
                <div className='paddingall'>
                  <span className='pricetitle'>Popular Products</span>
                </div>                                                          
              </CardContent>
            </Card>
          </Grid> */}
        {/* </Grid> */}
      </Box>
    </Box>
    </div>
    </>
  )
};

export default Note;