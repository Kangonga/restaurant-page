import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Mid from './Mid';
import Contacts from './Contacts';
import Menu from './Menu';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom"
import Reservations from './Reservations';

function App() {
  const [currentTab, setTab] = useState("Home");
  return (
    <Router className={currentTab=="Menu"?"contain":"cover"}>
      <NavBar currentTab = {currentTab} setTab = {setTab}/>
      <Routes>
      <Route exact path="/restaurant-page" element={<Mid />} />
      <Route exact path="/menu" element={<Menu />} />
      <Route exact path="/contacts" element={<Contacts />} />
      <Route exact path="/reservations" element={<Reservations />} />
      <Route path="*" element={<Mid/>} />

      </Routes>
      
    </Router>
  );
}

export default App;
