import React from 'react'
import '../Styles/DataCollection.css'
import { Link } from "react-router-dom";
import { FaDatabase } from "react-icons/fa6";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";




function DataCollection() {
  return (
    <section className={'background'}>
    <section className={'main-container2'}>
        <div className={'container2 '}>
            <div className={'px-16 py-4 flex flex-col items-center'}>
                Data Management
                <FaDatabase  className='size-14 collection'/>
            </div>
            <div className={'px-16 py-4 flex flex-col items-center'}>
                Data Analytics
                <FaMagnifyingGlassChart  className='size-14 collection'/>
            </div>
            <div className={'px-16 py-4 flex flex-col items-center'}>
                Data Visualization
                < BsGraphUpArrow  className='size-14 collection'/>
            </div>
            <div className={'px-20 py-4 flex flex-col items-center'}>
                Data Client
                < MdOutlinePeopleAlt  className='size-14 collection'/>
            </div>  
            
            <div className={'container3'}>
                <button className={'enroll con2'}> 
                     <Link to="/register">
                      <b>Register</b>
                    </Link>
                </button>
                <button className={'log con2'}>
                    <Link to="/login">
                      <b>Login</b>
                    </Link>
                </button>
            </div>
        </div>
    </section>
</section>
  )
}

export default DataCollection