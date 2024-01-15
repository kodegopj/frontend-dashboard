import React, { useState } from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import DataTable from 'react-data-table-component';


function Products() {
    const columns = [
        {
            name: 'Product Name',
            selector: row => row.name,
            sortable: true          
        },
        {
            name: "Quantity",
            selector: row => row.quantity,
            sortable: true    
        },
        {
            name: "Selling Pricet",
            selector: row => row.price,
            sortable: true    
        },
        {
            name: "Total Cost",
            selector: row => row.cost,
            sortable: true    
        },
      
    ];
    const data = [
        {
            id:1,
            name: "Buko Juice",
            quantity: "4",
            price: "10",
            cost: "40",
        },
        {
            id:2,
            name: "Japanese Siomai",
            quantity: "10",
            price: "36",
            cost: "360",
        },
        {
            id:3,
            name: "Sharksfin",
            quantity: "12",
            price: "38",
            cost: "456",
        },
        {
            id:4,
            name: "Black GUlaman",
            quantity: "4",
            price: "10",
            cost: "40",
        },
        {
            id:5,
            name: "Pork Siomai",
            quantity: "7",
            price: "28",
            cost: "196",
        },
        {
            id:6,
            name: "Chicken Siomai",
            quantity: "18",
            price: "30",
            cost: "540",
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
                <h1 className='client-data'> <b>Products</b> </h1>
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

export default Products;