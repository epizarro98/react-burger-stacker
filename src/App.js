import React, { useState } from "react";
import Burger from "./components/Burger";
import IngredientList from './components/IngredientList'

// Components imports
// CSS imports
import "./css/App.css";

const App = () => {

  const handleClear = () => {
    setItems([...ingredients, ...items])
    setIngredients([])
  }

  const deleteItem = (id) => {
    //temp arr, storing items in this temp array
    const arr = [...items]
    //splicing arr wherever the id is(splice: removes 1 element at a time) id is the location where were starting the splice
    let img = arr.splice(id, 1)
    setItems(arr)
    setIngredients(ingredients=>[...ingredients, ...img])
  }

  const [ingredients, setIngredients] = useState([])
  const handleAddIngredient = () =>{
  }
 
   const [items, setItems] = useState([
    { name: "Kaiser Bun", color: "saddlebrown"},
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ]);

  return (
    <>
      <div className='items'>
        {items.map((item, index) =>(
          <IngredientList 
            deleteItem={deleteItem}
            name={item.name} 
            color={item.color} 
            index={index}
          />
        ))}
          </div>

      <div className='container'>
        {ingredients.map((item, index) =>(
          <Burger 
            name={item.name} 
            color={item.color} 
            index={index}
          />
        ))}
        <button onClick={handleClear}>Clear</button>
      </div>
    </>
  )
}



export default App;