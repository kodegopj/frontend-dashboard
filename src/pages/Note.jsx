import React from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function Note() {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
      <Box sx={{ display: "flex"}}>
           <Sidenav/>
           <Box height={70}/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>         
          <Grid item xs={8}>
            <Card sx={{ height: 90 +"vh" }}>
                <div>
                  hello
                </div>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height: 90 +"vh" }}>
              <CardContent>
                <div className='paddingall'>
                  <span className='pricetitle'>Popular Products</span>
                </div>                                                          
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </>
  )
};

export default Note;