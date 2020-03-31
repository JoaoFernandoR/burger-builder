import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
 // Css
 import './Burger.css'
 
const Burger = props => {

    const ArrayComKeys = Object.keys(props)
    let transformedIngredients = ArrayComKeys.map(igKey => {
        return [...Array(props[igKey])].map((_, index) => {
            return <BurgerIngredient key={igKey + index} type={igKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    if (transformedIngredients.length === 0)
        transformedIngredients = <p> Please start adding ingredients!</p>


   return(
   <div className='Burger'>
       <BurgerIngredient type='bread-top'/>
       {transformedIngredients}
       <BurgerIngredient type='bread-bottom'/>
   </div>
   )
}
 
export default Burger