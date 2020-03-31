import React, {useState} from 'react'
// Components
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad : 0.50,
    cheese : 0.40,
    meat : 1.30,
    bacon : 0.70
}

const BurgerBuilder = () => {

    const [salad, setSalad] = useState(0)
    const [bacon, setBacon] = useState(0)
    const [cheese, setCheese] = useState(0)
    const [meat, setMeat] = useState(0)
    const [totalPrice, setTotalPrice] = useState(4)

    const objectState = { salad, cheese, meat, bacon}


    const addIngredientHandler = (label) => {
        if (label === 'salad') {
            setSalad(salad + 1)
            setTotalPrice(totalPrice + INGREDIENT_PRICES.salad)
        }
        if (label === 'bacon') {
            setBacon(bacon + 1)
            setTotalPrice(totalPrice + INGREDIENT_PRICES.bacon)
        }
        if (label === 'cheese') {
            setCheese(cheese + 1)
            setTotalPrice(totalPrice + INGREDIENT_PRICES.cheese)
        }
        if (label === 'meat') {
            setMeat(meat + 1)
            setTotalPrice(totalPrice + INGREDIENT_PRICES.meat)
        }
    }

    const removeIngredientHandler = (label) => {

        if (label === 'salad') {
            if (salad === 0)
                return 

        setSalad(salad - 1)
        setTotalPrice(totalPrice - INGREDIENT_PRICES.salad)
        }
        if (label === 'bacon') {
            if (bacon === 0)
                return 
            setBacon(bacon - 1)
            setTotalPrice(totalPrice - INGREDIENT_PRICES.bacon)
        }
        if (label === 'cheese') {
            if (cheese=== 0)
                return 
            setCheese(cheese - 1)
            setTotalPrice(totalPrice - INGREDIENT_PRICES.cheese)
        }
        if (label === 'meat') {
            if (meat === 0)
                return 
            setMeat(meat - 1)
            setTotalPrice(totalPrice - INGREDIENT_PRICES.meat)
        }
    }

    const disabledInfo = {
        ...objectState
    }

    // Lógica que eu não entendi
    for (let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
    <React.Fragment>
        <Burger salad={salad} bacon={bacon} cheese={cheese} meat={meat}/>
        <BuildControls addIngredientHandler={addIngredientHandler} 
        removeIngredientHandler={removeIngredientHandler}
        totalPrice={totalPrice}
        disabledInfo={disabledInfo}
        />
    </React.Fragment>
    )
}

export default BurgerBuilder