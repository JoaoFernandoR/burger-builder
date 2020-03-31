import React from 'react'
import './BuildControl.css' 
 
const BuildControl = props => {
    
const { label, addIngredientHandler, removeIngredientHandler, disabled } = props
 
   return(
    <div className="BuildControl">
       <div className="Labela">{label}</div>
       <button className="Less" onClick={() => removeIngredientHandler(label)} disabled={disabled}> Less </button>
       <button className="More" onClick={() => addIngredientHandler(label)}> More</button>       
   </div>
   )
}
 
export default BuildControl