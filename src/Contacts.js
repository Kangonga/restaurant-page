export default function Contacts(){

    function handleFormSubmit(event){
        event.preventDefault();
        event.target.reset()
    }
    return(
        <form onSubmit={handleFormSubmit} className="form">
             <label className="fname">
               <span> First Name: </span> <input type="text" className="firstName" />
            </label>
            <label className="lname">
                <span>Last Name: </span><input type="text" className="lastName" />
            </label>
            <label className="email">
               <span> Email: </span><input type="email" className="email" placeholder="Email:" />
            </label>
            <label className="textarea">
                <span>Your Comments:</span> <textarea type="textarea"></textarea>
            </label>
            <button className="submit">Submit</button>
        </form>
    )
}