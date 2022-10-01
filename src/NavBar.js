import React from "react";

export default function NavBar({setTab, currentTab}){
    function handleClick(event){
        setTab(()=>event.target.textContent)
        // if (currentTab === "Menu")setBgCover(()=>"contain")
        // else (setBgCover(()=>"cover"))
      }
    return(
        <div className="navbar">
            <li onClick={handleClick}>Home</li>
            <li onClick={handleClick}>Menu</li>
            <li onClick={handleClick}>Contacts</li>
        </div>
    )
}