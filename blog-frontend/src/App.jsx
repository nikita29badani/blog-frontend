
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx'; 
import Home from './pages/home.jsx';         
import CreatePost from './pages/createpost.jsx'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar /> 
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} /> -
          
        
          <Route path="/create" element={<CreatePost />} />

          
        </Routes>
      </main>
    </div>
  );
}

export default App;