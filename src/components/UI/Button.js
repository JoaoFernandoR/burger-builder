import React from 'react'
// CSS
import './Button.css'

const Button = props => {
 
const {children, className, onClick} = props
 
   return(
   <div className={`ui_button ${className}`} onClick={onClick}>
       {children}
   </div>
   )
}
 
export default Button