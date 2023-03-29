import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import BlogPost from './pages/BlogPost/BlogPost';
import Overview from './pages/Overview/Overview';
import Navigation from './components/navigation/Navigation';



function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <div>
        <Navigation isAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated} />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login toggleAuth={toggleIsAuthenticated} />} />
            <Route path="/blogposts" element={isAuthenticated ? <Overview /> : <Navigate to="/login" />} />
            <Route path="/blogposts/:blogId" element={isAuthenticated ? <BlogPost /> : <Navigate to="/login" />} />
        </Routes>
    </div>
  );
}

export default App;