    import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/NavBar';
    import BasicGrid from './components/llll';
    import Blog from './Blog'
    
   

    function App() {
      return (
        <div>
          <Navbar />
          <header> This is the about page (main)</header>
          <BasicGrid />
        </div>
      );
    }

    export default App;