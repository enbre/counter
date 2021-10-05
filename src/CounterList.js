import React from 'react'
import Counter from './Counter'
import './CSS/Counter-list.css'

function CounterList(props) {
   
   // Counters is the array of all counters 
   let counters = Array(props.counterNum).fill().map((counter, index)=>(
      <Counter key = {index} id = {index} increment = {props.increment} updateTotal = {props.updateTotal}/>
   ))
   return (
      <div className="Counter-list">
         {counters}
      </div>
   )
}

export default CounterList
