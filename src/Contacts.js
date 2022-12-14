import{ useState} from "react"
export default function Contacts(){

    function handleFormSubmit(event){
        event.preventDefault();
        event.target.reset()
        console.log(formData)
        let url="http://localhost:8000/contacts"
        let params = {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            "fname" : formData.fname,
            "lname" : formData.lname,
            "email" : formData.email,
            "comment" : formData.comment,
    }),
    }
        setFormData({
            fname : "",
            lname : "",
            email : "",
            comment : "",
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
        <form onSubmit={handleFormSubmit} className="form">
            <div className="contactHero">We would like to hear from you!</div>
             <label className="fname">
               <span> First Name: </span> <input name="fname"onChange={handleChange}value={formData.fname}type="text" className="firstName" />
            </label>
            <label className="lname">
                <span>Last Name: </span><input name="lname"onChange={handleChange}value={formData.lname}type="text" className="lastName" />
            </label>
            <label className="email">
               <span> Email: </span><input name="email"onChange={handleChange}value={formData.email} type="email" className="email" placeholder="Email:" />
            </label>
            <label className="textarea">
                <span>Your Comments:</span> <textarea name="comment"onChange={handleChange}value={formData.comment}type="textarea"></textarea>
            </label>
            <button className="submit">Submit</button>
        </form>
    )
}