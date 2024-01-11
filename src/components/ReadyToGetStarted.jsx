import React from 'react';
import '../Styles/Started.css';
import { Link } from "react-router-dom";

function ReadyToGetStarted() {
  return (
    <div className='ready-started'>
        <h1 className='h1-started'> <b>Ready to get started?</b> </h1>
        <p className='p-started'>Your first dashboard up and running by the day.</p>
        <button className='trial-button'>
         <Link to="/register">Start Your Trial
         </Link>
         </button>
    </div>
  )
}

export default ReadyToGetStarted