import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Mid from './Mid';
import Contacts from './Contacts';
import Menu from './Menu';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [currentTab, setTab] = useState("Home");
  return (
    <Router className={currentTab=="Menu"?"contain":"cover"}>
      <NavBar currentTab = {currentTab} setTab = {setTab}/>
      <Routes>
      <Route path="/" element={<Mid />} />
      <Route path="/menu" element={<Menu />} />
       <Route path="/contacts" element={<Contacts />} />
      </Routes>
      
    </Router>
  );
}

export default App;
