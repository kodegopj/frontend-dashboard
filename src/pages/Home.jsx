import React from 'react'
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import "../Dash.css";
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../components/AccordionDash';
import { BarChart } from '../charts/BarChart';


function Home() {
  return (
    <>
    <div className='bgcolor'>
        <Navbar/>
        <Box height={70}/>
        <Box sx={{ display: "flex"}}>
            <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Stack spacing={2} direction={"row"}>
                                <Card sx={{ minWidth: 49 + "%", height: 150}} className='gradient'>
                                    <CardContent>
                                        <div className='iconstyle'>
                                        <ShoppingBagIcon/>
                                        
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{color: '#ffffff'}}>
                                        89,689
                                        </Typography>
                                        <Typography 
                                            gutterBottom variant="body2" 
                                            component="div" 
                                            sx={{color: "#ccd1d1"}}
                                        >
                                            Total Orders
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 49 + "%", height: 150}} className='gradientlight'>
                                    <CardContent>
                                        <div className='iconstyle'>
                                          
                                            <CreditCardIcon/>
                                        </div>
                                        <Typography gutterBottom variant="h5" component="div" sx={{color: '#ffffff'}}>
                                            $337,346.00
                                        </Typography>
                                        <Typography 
                                            gutterBottom variant="body2" 
                                            component="div" 
                                            sx={{color: "#ccd1d1"}}
                                        >
                                            Total Earnings
                                        </Typography>
                                    </CardContent>
                                </Card>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={2} >
                                <Card sx={{ minWidth: 49 }} className='card'>
                                        <Stack spacing={2}  direction="row">
                                        <div className='iconstyle'>
                                            <StoreIcon/>
                                        </div>
                                        <div className='paddingall'>
                                            <span className='pricetitle'>$337,346.00</span>
                                            <br/>
                                            <span className='pricesubtitle'>Total Income</span>
                                        </div>
                                        </Stack>
                                </Card>
                                <Card sx={{ minWidth: 45 }} className='card2'>
                                        <Stack spacing={2}  direction="row">
                                        <div className='iconstyle'>
                                            <StoreIcon/>
                                        </div>
                                        <div className='paddingall'>
                                            <span className='pricetitle'>$175,825.00</span>
                                            <br/>
                                            <span className='pricesubtitle'>Total Expenses</span>
                                        </div>
                                        </Stack>
                                </Card>
                        </Stack>
                    </Grid>
                </Grid>
                <Box height={20}/>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <Card sx={{ height: 60 +"vh" }}>
                            <CardContent>
                              <BarChart/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card sx={{ height: 60 +"vh" }}>
                            <CardContent>
                                <div className='paddingall'>
                                    <span className='pricetitle'>Popular Products</span>
                                </div>
                            <AccordionDash/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </div>
    </>
  )
}

export default Home