import React from 'react';
import CardContent from '@mui/material/CardContent';
import { FaArrowRight } from "react-icons/fa";
import Grid from '@mui/material/Grid';
import { IoMdCheckboxOutline } from "react-icons/io";

function AppSuited() {
  return (
    <>
        <h1 className='app-suited'>
        <b>This app is suited for</b>
       </h1>
       <div className='mains'>
         <div className=' suited-container'>
            <div className='flex card-suited'>
              < FaArrowRight className='arrow-suit text-2xl'/>
                <div className='m-2'><b>Ecommerce Dashboard</b></div>
            </div>
            <div className='flex card-suited'>
              < FaArrowRight className='arrow-suit text-2xl'/>
                <div className='m-2'><b>Website Dashboard</b></div>
            </div>
            
            <div className='flex card-suited'>
              < FaArrowRight className='arrow-suit text-2xl'/>
                <div className='m-2'><b>Ecom Dashboard</b></div>
            </div>
            <div className='flex card-suited'>
              < FaArrowRight className='arrow-suit text-2xl'/>
                <div className='m-2'><b>Ecommerce  Analysis Dashboard</b></div>
            </div>
          </div>
       </div>
       <h1 className='app-suited'>
        <b>Key Features</b>
       </h1>
       <div className='mains'>
         <div className='suited-container suit-con'>
            <div>
              <div className='flex card-suited suited'>
                < IoMdCheckboxOutline  className='arrow-suit text-2xl'/>
                  <div className='m-4'><b>Analytics of Total Orders and Status count of orders.</b></div>
              </div>
              <div className='flex card-suited suited'>
                < IoMdCheckboxOutline  className='arrow-suit text-2xl'/>
                  <div className='m-4'><b>Analytics of Top Visited Products.</b></div>
              </div>
            </div>
            <br/>
           <div>
            <div className='flex card-suited suited'>
                <IoMdCheckboxOutline className='arrow-suit text-2xl'/>
                  <div className='m-4'><b>Analytics of Total Income and Expenses.</b></div>
              </div>
              <div className='flex card-suited suited'>
                < IoMdCheckboxOutline  className='arrow-suit text-2xl'/>
                  <div className='m-4'><b>Analytics of Total Orders and Earnings.</b></div>
              </div>
           </div>
          </div>
       </div>
    </>
  )
}

export default AppSuited