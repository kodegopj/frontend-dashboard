import { IconButton, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { useState } from 'react';


function AddForm({closeEvent}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);
  const [cost, setCost] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setName(event.target.value);
  };

  const handleCostChange = (event) => {
    setName(event.target.value);
  };

  const createUser = () => {};

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography>
        Add Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon/>
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField 
            id="outlined-basic" 
            label="Product Name" 
            variant="outlined"
            size="small"
            onChange={handleNameChange}
            value={name}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            id="outlined-basic" 
            label="Quantity" 
            variant="outlined"
            size="small"
            type='number'
            onChange={handleQuantityChange}
            value={quantity}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            id="outlined-basic" 
            label="Selling Price" 
            variant="outlined"
            size="small"
            type='number'
            onChange={handlePriceChange}
            value={price}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            id="outlined-basic" 
            label="Total Cost" 
            variant="outlined"
            size="small"
            type='number'
            onChange={handleCostChange}
            value={cost}
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5' align='center'>
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }}/>
    </>
  )
}

export default AddForm;