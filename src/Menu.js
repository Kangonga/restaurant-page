import { useState, useEffect} from "react"

export default function Menu(){
    const [meal,setMeal] = useState('bbqs')
    const [searchText,setSearchText] = useState('')
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
    function searchMeal(e){
        // setFood(e.target.value)
        console.log('e.target.value = ' + e.target.value)
    }
    function handleSearch(e){
        setSearchText(()=>e.target.value)
    }
    return(
        <div>
            <div className="search"><input value={searchText} onChange={handleSearch} type="text" placeholder="search for a meal"></input></div>
            <div className="separate"></div>
            <div className="menuTitle">Here's the menu!</div>
            <div className="navbar navMeal">
                <li onClick={newMeal} className="breads">Breakfast</li>
                <li onClick={newMeal} className="burgers">Lunch</li>
                <li onClick={newMeal} className="fried-chicken">Dinner</li>
            </div>
            <div className="foodContainer">
            {food.filter((foodItem)=>{
                 if(searchText==""){
                    return food
                }
                else{
                    return(
                        foodItem.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                }
            }).map(item=><div key={item.id}
            className="item">
                <img className="foodImg"src={item.img}></img>
                <div >{item.name}</div>
                </div>
                )}
        </div>
        </div>
        
    )
}