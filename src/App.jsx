import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Settings from './pages/Settings';
import Note from './pages/Note'
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import noteService from "./services/noteService.js";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import productService from "./services/productService.js";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedDashboard");


    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      productService.setToken(user.token); 
      setUser(user);
    }
  }, []);
 
  return (
    <>
     
    <Routes>
      <Route path="/home" element={<Home user={user} setUser={setUser} />} />         
      <Route path="/register" element={<Register user={user} />} />
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      <Route path="/" exact element={<Dashboard/>} />
      <Route path="/note" exact element={<Note/>} />
      <Route path="/products" element={<Products user={user} setUser={setUser} />} />         
      <Route path="/settings" exact element={<Settings/>} />

    </Routes> 
    
    </>
  )
}

export default App
