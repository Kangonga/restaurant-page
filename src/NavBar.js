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
            <Link className="nav"to ="restaurant-page/home" onClick={handleClick}>Home</Link>
            <Link className="nav"to="restaurant-page/menu"onClick={handleClick}>Menu</Link>
            <Link className="nav"to="restaurant-page/contacts"onClick={handleClick}>Contacts</Link>
            <Link className="nav"to="restaurant-page/reservations"onClick={handleClick}>Reservations</Link>
        </div>
    )
}