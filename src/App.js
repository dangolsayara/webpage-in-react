import React from "react";
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from "./components/Slider/index";

function App() {
  return (
    <Router>
       <Sidebar/>
      <Navbar/>
    </Router>
  );
}

export default App;
