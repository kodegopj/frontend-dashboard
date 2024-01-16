import React, { useState } from 'react';
import { useEffect } from 'react';
import Sidenav from '../components/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import DataTable from 'react-data-table-component';
import productService from '../services/productService';


function Products() {

    const columns = [
        {
            name: 'Product Name',
            selector: row => row.title,
            sortable: true          
        },
        {
            name: "Quantity",
            selector: row => row.qty,
            sortable: true    
        },
        {
            name: "Cost",
            selector: row => row.cost,
            sortable: true    
        },
        {
            name: "Selling Price",
            selector: row => row.price,
            sortable: true    
        },
        {
            name: "Number of Sales",
            selector: row => row.purchasedQuantity,
            sortable: true    
        },
      
    ];

    // const data = [
    //     {
    //         id:1,
    //         name: "Buko Juice",
    //         quantity: "4",
    //         price: "10",
    //         cost: "40",
    //     },
    //     {
    //         id:2,
    //         name: "Japanese Siomai",
    //         quantity: "10",
    //         price: "36",
    //         cost: "360",
    //     },
    //     {
    //         id:3,
    //         name: "Sharksfin",
    //         quantity: "12",
    //         price: "38",
    //         cost: "456",
    //     },
    //     {
    //         id:4,
    //         name: "Black GUlaman",
    //         quantity: "4",
    //         price: "10",
    //         cost: "40",
    //     },
    //     {
    //         id:5,
    //         name: "Pork Siomai",
    //         quantity: "7",
    //         price: "28",
    //         cost: "196",
    //     },
    //     {
    //         id:6,
    //         name: "Chicken Siomai",
    //         quantity: "18",
    //         price: "30",
    //         cost: "540",
    //     },
        
    // ];

    const [products, SetProducts] = useState([]);
  
    useEffect(() => {
      productService.getProducts().then((res) => SetProducts(res))
    }, []);

    console.log(products);

    const [records, setRecords] = useState(products);

    function handleFilter(event) {
        const newData = products.filter(row => {
            return row.title.toLowerCase().includes(event.target.value.toLowerCase());
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
                    data= {products}
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