import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';


function Settings({ setUser }) {


  const handleLogout = () => {
    window.localStorage.removeItem("loggedDashUser");
    setUser(null);  

    console.log(handleLogout)
  };
 
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: "flex"}}>
        <Sidenav/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <button onClick={ handleLogout  }>Logout</button>
        </Box>
    </Box>
    </>
  )
};

export default Settings