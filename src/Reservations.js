import { useState } from "react";

export default function Reservations(){
    function handleFormSubmit(event){
        event.preventDefault();
        event.target.reset()
        console.log(formData)
        let url="http://localhost:8000/reservations"
        let params = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            "fname" : formData.fname,
            "lname" : formData.lname,
            "email" : formData.email,
            "people" : formData.people,
    }),
    }
        setFormData({
            fname : "",
            lname : "",
            email : "",
            people : 0,
    })
    fetch(url, params)
    }
    
    
    const[formData,setFormData] = useState({
        fname : "",
        lname : "",
        email : "",
        people : 0,
    })
    function handleChange(event) {
        setFormData(()=>{
            return {...formData,[event.target.name]:event.target.value}
        })
        }
    return(
        <>
        <form onSubmit={handleFormSubmit} className="form">
            <div className="contactHero">
            <h3>Book a table with us today!</h3>

            </div>
             <label className="fname">
               <span> First Name: </span> <input name="fname"value={formData.fname} onChange={handleChange}type="text" className="firstName" />
            </label>
            <label className="lname">
                <span>Last Name: </span><input name="lname"value={formData.lname} onChange={handleChange} type="text" className="lastName" />
            </label>
            <label className="lname">
                <span>Number of people: </span><input name="people"value={formData.people} onChange={handleChange} type="number" className="lastName" />
            </label>
            <label className="email">
               <span> Email: </span><input name="email"value={formData.email} onChange={handleChange} type="email" className="email" placeholder="Email:" />
            </label>
            <label className="date">
                <span>Date:</span> <input name="date" onChange={handleChange} type="date"></input>
            </label>
            <button className="submit">Submit</button>
        </form>
        </>
    )
}