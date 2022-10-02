import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({setTab, currentTab}){
    function handleClick(event){
        setTab(()=>event.target.textContent)
        // if (currentTab === "Menu")setBgCover(()=>"contain")
        // else (setBgCover(()=>"cover"))
      }
    return(
        <div className="navbar">
            <Link to="" onClick={handleClick}>Home</Link>
            <Link Link to="menu"onClick={handleClick}>Menu</Link>
            <Link Link to="contacts"onClick={handleClick}>Contacts</Link>
        </div>
    )
}