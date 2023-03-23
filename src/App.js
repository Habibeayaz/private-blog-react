import React, { useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import BlogPosts from './pages/blogposts/Blogposts';
import Navigation from './components/navigation/Navigation';


function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
    <div>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/blog-overzicht" element={<BlogPosts/>}/>
        </Routes>
    </div>
  );
}

export default App;