import React from 'react';
import Nav from '../components/Nav';
import "../Styles/Main.css"
import DataCollection from '../components/DataCollection';
import Footer from '../components/Footer';
import '../Styles/AppSuited.css';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { FaArrowRight } from "react-icons/fa";
import Grid from '@mui/material/Grid';
import { IoMdCheckboxOutline } from "react-icons/io";
import AppSuited from '../components/AppSuited';
import SalesPricing from '../components/SalesPricing';
import ReadyToGetStarted from '../components/ReadyToGetStarted';


function Dashboard() {
  return (
    <Box >
        <Nav/>
        <div className='dash-land-container'>
          <div className='dash-land'>
          <h1 > <b> The easiest reporting solution for your needs</b> </h1>
            <p className='p-dash'> CENTER CODE is an automated and easy-to-use marketing reporting tool created to help marketers save hours of work and create beautiful reports in the blink of an eye. See how center code can help your business by selecting the category that best fits you.</p>
          </div>
        </div>
        <DataCollection/>
        <SalesPricing/>
        <AppSuited/>
        <ReadyToGetStarted/>
      <Footer/>
    </Box>

  )
}

export default Dashboard;