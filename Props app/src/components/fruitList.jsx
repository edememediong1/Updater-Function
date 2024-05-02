
function List(){
    const fruits = [{id:1, name:'apple', calories:95}, 
    {id:2, name: 'banana', calories: 45}, 
    {id:3, name: 'orange', calories: 105}, 
    {id:4, name: 'coconut', calories: 159}, 
    {id:5, name: 'pineapple', calories: 37}]
    
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //Sorts alphabetically in descending order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); //Sorts alphabetically in ascending order
    // fruits.sort((a,b) => a.calories - b.calories); //NUMERIC
    // fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b>{fruit.calories}</b></li>)
    
    //Low Cal Fruits
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    const lowListItems = lowCalFruits.map(lowCalFruit => (<li key={lowCalFruit.id}>{lowCalFruit.name} &nbsp; <b>{lowCalFruit.calories}</b></li>))

    //High Cal Fruits
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)
    const highListItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name} &nbsp; <b>{highCalFruit.calories}</b></li>)


    return(
        <div>
            <ol>
                <h1>All Fruits</h1>
                {listItems}
            </ol>
            <ol>
                <h1>Low Cal Fruits</h1>
                {lowListItems}
            </ol>
            <ol>
                <h1>High Cal Fruits</h1>
                {highListItems}
            </ol>
        </div>


    )
}
export default List;