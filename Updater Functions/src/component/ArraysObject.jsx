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

            </ul>
            <input type="number" value={car}
        </section>
    )
}