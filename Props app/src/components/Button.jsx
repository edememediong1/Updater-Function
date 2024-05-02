function Button(){
    let count = 0
    const handleClick = (name) => {
        if (count < 3){
            count++
            alert(`${name} You clicked me ${count} times`)
        } else{
            alert(`${name} stop clicking me`)
        }
    }

    const clickReaction = (e) =>{
        e.target.textContent
    }

    return(
        <>
            <button onClick={() => handleClick('Emediong')}>Click me</button>
            <button onDoubleClick= {(e) => clickReaction(e)}>Reaction</button>
        </>

    )
}

export default Button;