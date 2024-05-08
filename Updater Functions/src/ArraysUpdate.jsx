import { useState } from "react"

export default function ArraysUpdate(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])


    const handleAddFood = ()=>{
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = ''

        setFoods(f => [...f, newFood])
    }

    const handleRemoveFood = () => {
        
    }
    return(
        <div>
            <h2>List of Food</h2>

            <ul>
                {foods.map((food,index) => <li key={index}>{food}</li>)}   
            </ul>
            <input type="text" id="footInput" placeholder="Enter Food..." ></input>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}