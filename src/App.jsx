import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import Note from './pages/Note'
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import Products from "./pages/Products";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedDashUser");


    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, [])
 
  return (
    <>
     
        <Routes>
         <Route path="/" element={<Home user={user} setuser={setUser} />} />
         <Route path="/register" element={<Register user={user} />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/note" exact element={<Note/>} />
          <Route path="/products" exact element={<Products/>} />
          <Route path="/settings" exact element={<Settings/>} />
          <Route path="/analytics" exact element={<Analytics/>} />
        </Routes> 
    
    </>
  )
}

export default App
