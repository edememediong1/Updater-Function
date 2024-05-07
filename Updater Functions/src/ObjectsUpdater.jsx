import { useState } from "react"

export default function ObjectsUpdate(){
    const [car, setCar]  =  useState({ year: 2024,
                                        make: "Ford",
                                        model: "Mustang"
                                            });

    
    const handleYearChange = () => {
        
    }
    

    return(
        <div>
                <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year}  onChange={}/><br/>
                <input type="text" value={car.name} onChange={}/> <br/>
                <input type="text" value={car.model} onChange={}/> <br/>
        </div>
    )
}