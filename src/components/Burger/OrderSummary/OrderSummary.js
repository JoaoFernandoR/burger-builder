import React from 'react'
// Components 
import Button from '../../UI/Button'

const OrderSummary = props => {
 
const {ingredients, handleModal} = props
 
const ArrayComKeys = Object.keys(ingredients)

const transformedIngredients = ArrayComKeys.map((igKey, i) => {
    return (
    <li key={i}>
        <span style={{textTransform : 'capitalize'}}>{igKey}</span>: 
        {ingredients[igKey]} 
    </li>
    ) 
})
    
   return(
    <div className="p-5">
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {transformedIngredients}            
        </ul>
        <p>Continue to Checkout?</p>
        <div className='d-flex justify-content-between'>
            <Button className='bg-danger' onClick={handleModal}> Cancel </Button>
            <Button> Continue </Button>
        </div>
    </div>
   )
}
 
export default OrderSummary