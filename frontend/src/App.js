import './App.css';
import UserHome from './components/User/UserHome';
import RegisterHome from './components/RegisterUser/UserHome';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Forgot from './components/Auth/ForgotPassword';
import ProtectedRoute from './utils/ProtectedRoute';
import { GoogleOAuthProvider } from "@react-oauth/google";  

function App() {
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <GoogleOAuthProvider clientId="872195979745-v2otegricmipgm03ll65gct28astlb7q.apps.googleusercontent.com">
      <Router>
        <div>
          <Routes>
            <Route >
              <Route path="/" element={<UserHome />} />
            </Route>
            <Route element={<ProtectedRoute role="user" />}>
              <Route path="/User" element={<RegisterHome />} />
            </Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
