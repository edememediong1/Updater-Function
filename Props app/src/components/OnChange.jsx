import { useState } from "react"

export default function OnChange() {
    const [input, setInput] = useState('');
    const [text, setText] = useState('')
    const [select, setSelect] = useState('')
    const [radio, setRadio] = useState()

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleSelectChange = (e) => {
        setSelect(e.target.value)
    }

    const handleRadioChange = (e) => {
        setRadio(e.target.value)
    }

    return(
        <>
            <div>
                <input type="password" onChange={handleInputChange} placeholder="Input Your Password"/>
                <p>Name: {input} </p>
            </div>

            {/* --------------------------------------- */}

            <div>
                <textarea onChange={handleTextChange} placeholder="What is on your mind?"/>
                <h3>Text: {text}</h3>
            </div>

            {/* --------------------------------------- */}
            <div>
                <select onChange={handleSelectChange}>
                    <option value=''>Select an option</option>
                    <option value='Nigeria'>Nigeria</option>
                    <option value='Ghana'>Ghana</option>
                    <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                </select>
                <h2>Country: {select}</h2>
            </div>

            {/* --------------------------------------- */}
            <div>
                <label>
                    <input type="radio" value="MasterCard" checked={radio === 'MasterCard'}  onChange={handleRadioChange} />
                    MasterCard
                </label>
                <label>
                    <input type='radio' value='Visa' checked={radio === 'Visa'} onChange={handleRadioChange} />
                    Visa
                </label>
                <h2>Card:{radio}</h2>
            </div>
        
        </>
    )
}