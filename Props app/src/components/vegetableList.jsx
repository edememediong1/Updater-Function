import PropTypes from 'prop-types'

function VegetableList(props){

    const vegetableItem = props.item;
    const category = props.category;

    const itemList = vegetableItem.map(vegetable => <li key={vegetable.id}>{vegetable.name}: &nbsp; <b>{vegetable.calories}</b></li>)
    
    return(
       <>
            <h1 className="list-header">{category}</h1>
            <ol className="list-item">
                {itemList}
            </ol>

       </> 
    )
}

VegetableList.PropTypes = {
    category : PropTypes.string,
    item : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),

}

VegetableList.defaultProps = {
    category: "Category",
    item : []
}


export default VegetableList;