import React from 'react'
//Css
import './BuildControls.css'
// Components
import BuildControl from './BuildControl/BuildControl'

const BuildControls = props => {
 
    const {addIngredientHandler, removeIngredientHandler, totalPrice, disabledInfo, handleModal} = props
     
    const controls = [
        { label : 'salad', ctrl : 'salad'},
        { label : 'bacon', ctrl : 'bacon'},
        { label : 'cheese', ctrl : 'cheese'},
        { label : 'meat', ctrl : 'meat'},
    ]
    
    const purchasable = () => {

        const ArrayWithvalues = Object.values(disabledInfo)

        const result = ArrayWithvalues.reduce((prev, curr) => prev + curr,0)

        if ( result !== 4)
            return false

        return true
    }
    

    return(
    <div className="BuildControls">
        <div>Current Price : <span style={{fontWeight : 'bold'}}>{totalPrice.toFixed(2)} $</span></div>
        {controls.map((item, index) => <BuildControl 
        label={item.label} 
        key={index}
        addIngredientHandler={addIngredientHandler}
        removeIngredientHandler={removeIngredientHandler}
        disabled={disabledInfo[item.ctrl]}
        />)}
        <button className='OrderButton my-4' 
        disabled={purchasable()}
        onClick={handleModal}> ORDER NOW</button>
    </div>
   )
}
 
export default BuildControls