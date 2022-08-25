import './App.css';
import React, { useState, useEffect } from 'react'
import Navbar from "./Components/Navbar"
import Home from './Components/Home/Home.js';
import Login from './Components/Login/Login';


import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom" //Routes ist Switch

function App() {
  const [token, setToken] = useState(getToken)
  const [isSubmited, setIsSubmited] = useState(true)
 
  const today = new Date()

  function getToken() {
    const tokenString = localStorage.getItem("token")
    const userToken = JSON.parse(tokenString)
    return userToken
  }

  return (
    <Router>
      <div className="App">
        <Navbar token={token} />
        <Routes>
          {!isSubmited && (
            <>
              <Route path="/login"
                element={<Login setToken={setToken} token={token} isSubmited={isSubmited} setIsSubmited={setIsSubmited} />}
              />
              {/* <Route path="/signin" element={<Registry token={token} />} /> */}
            </>
          )}
          {isSubmited && (
            <>
              <Route path="/home" element={<Home />} /> 
              {/* <Route path="/myProfile" element={<MyProfile token={token} />} /> */}
              {/* <Route path="/insertBooking" element={<InsertBooking token={token} bookings={bookings} />} /> */}
            </>
          )}
          {<Route path="*" element={<Navigate to={isSubmited ? "/home" : "/login"} />} />}



          {/* <Route  path="/" element={<Login setToken={setToken} token={token}/>} /> */}



        </Routes>

      </div>
    </Router>
  );
}

export default App;
