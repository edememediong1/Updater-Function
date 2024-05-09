import { useState } from "react"

export default function ArraysObject(){
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")


    function handleAddCar() {

    }

    function handleRemoveCar(){
 
    }

    function handleYearChange(){

    }

    function handleMakeChange(){

    }

    function handleModelChange(){

    }

    
    return(
        <section>
            <h2> List of Car Objects</h2>
            <ul>

            </ul> <br/>
            <input type="number" value={carYear} onChange={handleYearChange} /><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make..."/> <br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model..."/> <br/>
            
        </section>
    )
}