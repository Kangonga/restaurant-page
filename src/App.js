import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Mid from './Mid';
import Contacts from './Contacts';
import Menu from './Menu';
import { useState } from 'react';

function App() {
  // const[bgcCover,setBgCover] = useState("cover");
  const [currentTab, setTab] = useState("Home");
  return (
    <div className={currentTab=="Menu"?"contain":"cover"}>
      <NavBar currentTab = {currentTab} setTab = {setTab}/>
      { currentTab=="Home" && <Mid />}
      {currentTab=="Contacts" &&  <Contacts/>}
      { currentTab=="Menu" && <Menu/> }
    </div>
  );
}

export default App;
