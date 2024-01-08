import React, { useState } from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import DataTable from 'react-data-table-component';


function Invoice() {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true          
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true    
        },
        {
            name: "Age",
            selector: row => row.age,
            sortable: true    
        },
      
    ];
    const data = [
        {
            id:1,
            name: "abel",
            email:"abel@gmail.com",
            age: "32",
        },
        {
            id:2,
            name: "kelly",
            email:"kelly@gmail.com",
            age: "26",
        },
        {
            id:3,
            name: "loki",
            email:"loki@gmail.com",
            age: "38",
        },
        {
            id:4,
            name: "charlie",
            email:"charlie@gmail.com",
            age: "29",
        },
        {
            id:5,
            name: "romeo",
            email:"romeo@gmail.com",
            age: "36",
        },
        {
            id:6,
            name: "hanz",
            email:"hanz@gmail.com",
            age: "24",
        },
        {
            id:7,
            name: "harvey",
            email:"harvey@gmail.com",
            age: "23",
        },
        {
            id:8,
            name: "kenlee",
            email:"kenlee@gmail.com",
            age: "25",
        },
        {
            id:9,
            name: "christian",
            email:"christian@gmail.com",
            age: "32",
        },
        {
            id:10,
            name: "kathleen",
            email:"kathleen@gmail.com",
            age: "18",
        },
        {
            id:11,
            name: "chloe",
            email:"chloe@gmail.com",
            age: "22",
        },
        {
            id:12,
            name: "jenilyn",
            email:"jenilyn@gmail.com",
            age: "36",
        },
    ]

    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecords(newData);
    };

  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: "flex"}}>
        <Sidenav/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className=' mt-5' >
                <h1 className='client-data'> <b>Client Data</b> </h1>
                <div className='text-end'>
                    <input 
                        type='text'
                        onChange={handleFilter}
                        className=' border-solid border-2 border-slate-500 p-2 w-96 mx-2' />
                </div>
                <DataTable
                    columns={columns}
                    data={records}
                    selectableRows
                    fixedHeader
                    pagination
                    className='py-2'
                >
               
                </DataTable>
            </div>
        </Box>
    </Box>
    </>
  )
};

export default Invoice;