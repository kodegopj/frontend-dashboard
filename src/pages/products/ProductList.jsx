import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Autocomplete, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import AddForm from './AddForm';
import productService from '../../services/productService';

const rows = [
  
];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    productService.getProducts().then((res) => setProducts(res))
  }, []);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filterData = (v) => {
    if (v) {
      setProducts([v]);
    }   else {
      setProducts([]);
        getUsers();
    }
  };

  return (

    <>
    <div>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <AddForm closeEvent={handleClose}/>
        </Box>
      </Modal>
    </div>

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
        >
            Product List
        </Typography>
        <Divider/>
            <Box height={10} />
            <Stack direction="row" spacing={2} className="my-2 mb-2">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={products}
                    sx={{ width:300 }}
                    onChange={(e, v) => filterData(v)}
                    getOptionLabel={(products) => products.price || ""}
                    renderInput={(params) => (
                        <TextField {...params} size="small" label="Search Products" />
                    )}
                />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                </Typography>
                <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>
                    Add
                </Button>
            </Stack>
            <Box height={10} />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}>
                  Product Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}>
                  Quantity
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}>
                  Selling Price
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}>
                  Total Cost
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}>
                  Number of Sales
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" }}>
                  Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((products) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                        <TableCell key={products.id} align="left">
                            {products.title}
                        </TableCell>
                        <TableCell key={products.id} align="left">
                            {products.qty}
                        </TableCell>
                        <TableCell key={products.id} align="left">
                            {products.price}
                        </TableCell>
                        <TableCell key={products.id} align="left">
                            {products.cost}
                        </TableCell>
                        <TableCell key={products.id} align="left">
                            {products.purchasedQuantity}
                        </TableCell>
                        <TableCell key={products.id} align="left">
                            <Stack spacing={2} direction="row">
                                <EditIcon
                                    style={{
                                        fontSize: "20px",
                                        color: "gray",
                                        cursor: "pointer",
                                    }}
                                    className="cursor-pointer"
                                    // onClick={() => editUser(row.id)}
                                />
                                <DeleteIcon
                                    style={{
                                        fontSize: "20px",
                                        color: "red",
                                        cursor: "pointer",
                                    }}
                                    // onClick={() => {
                                    //     deleteUser(row.id);
                                    // }}
                                />
                            </Stack>
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
