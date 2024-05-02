import { useState } from "react"

export default function Name(){
    const [inputValue, setInputValue] = useState("")
    const [inputText, setInputText] = useState("")

    const handleClick = () => {
        setInputText([...inputText,inputValue])
        setInputValue('')
    }

    const handleChange = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }
    return(
        <>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Display Text</button>
            <div>
                {/* {inputText.map((text,index) => (
                    <p key={index}>{text}</p>
                ))} */}
                {inputText} &nbsp;
            </div>

        </>
    )
}