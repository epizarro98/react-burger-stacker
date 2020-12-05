import React, {useState} from 'react'
// import Ingredient from './Ingredient'


const IngredientList = (props) =>{
    return (
        <div id={props.index} onClick={ () => props.deleteItem(props.index)}>
           {props.name}
       </div>
    )}


export default IngredientList