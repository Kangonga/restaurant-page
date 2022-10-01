import { useState, useEffect} from "react"

export default function Menu(){
    const [meal,setMeal] = useState('bbqs')
    const url = `https://ig-food-menus.herokuapp.com/${meal}`
    const [food,setFood] = useState([])
    useEffect(()=>{
    fetch(url)
    .then(resp=>resp.json())
    .then (data=>{
        setFood(data)
    })
    },[meal])
    function newMeal(e){
        setMeal(e.target.className)
    }
    return(
        <div>
            <div className="menuTitle">Here's the menu!</div>
            <div className="navbar navMeal">
                <li onClick={newMeal} className="breads">Breakfast</li>
                <li onClick={newMeal} className="burgers">Lunch</li>
                <li onClick={newMeal} className="fried-chicken">Dinner</li>
            </div>
            <div className="foodContainer">
            {food.map(item=><div key={item.id}
            className="item">
                <img className="foodImg"src={item.img}></img>
                <div >{item.name}</div>
                </div>
                )}
        </div>
        </div>
        
    )
}