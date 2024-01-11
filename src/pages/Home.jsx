import { useNavigate } from 'react-router-dom';
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
import AccordionDash from '../components/AccordionDash.jsx';
import BarChart from "../charts/BarChart.jsx"
import { useEffect } from 'react';




function Home({ user }) {
    

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    // const handleLogout = () => {
    //     window.localStorage.removeItem("loggedDashUser");
    //     setUser(null);
    // };
 

  return (
    <>
    <div className='bgcolor'>
        <Navbar/>
        <Box height={70}/>
        <Box sx={{ display: "flex"}}>           
            <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }} className='containers'>
                <Grid container spacing={2} className='main-container'>
                    <div item xs={8} className='total-orders'>
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
                    </div>
                    <div item xs={4} className='total-income'>
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
                    </div>
                </Grid>
                <Box height={20}/>
                <Grid container spacing={2} className='dash-chart'>
                    <div item xs={8} className='barchart'>
                        <Card sx={{ height: 60 +"vh" }}>
                            <CardContent>
                              <BarChart/>
                            </CardContent>
                        </Card>
                    </div>
                    <div item xs={4} className='popular-product'>
                        <Card sx={{ height: 60 +"vh" }} className='accor'>
                            <CardContent className='accor'>
                                <div className='paddingall'>
                                    <span className='pricetitles'>Popular Products</span>
                                </div>                                
                            <AccordionDash/>
                            </CardContent>
                        </Card>
                    </div>;
                </Grid>
            </Box>
        </Box>
    </div>
    </>
  )
}

export default Home;