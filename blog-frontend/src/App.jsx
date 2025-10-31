
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Home';         
import CreatePost from './pages/CreatePost'; 

function App() {
  return (
    <div className="App">
      <Navbar /> 
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} /> 
          
        
          <Route path="/create" element={<CreatePost />} />

          
        </Routes>
      </main>
    </div>
  );
}

export default App;