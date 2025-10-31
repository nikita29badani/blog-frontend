
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import navbar from './components/navbar'; 
import home from './pages/home';         
import createPost from './pages/createpost'; 
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