
import React, { useState } from 'react'
import Sidenav from '../components/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';
import ProductList from './products/ProductList';


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
            <ProductList/>

        </Box>
    </Box>
    </>
  )
};

export default Products;