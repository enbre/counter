import React from 'react'
import Counter from './Counter'

function CounterList(props) {
   
   
   let counters = Array(props.counterNum).fill().map((counter, index)=>(
      // console.log(counterNum)
      <Counter key={index}/>
   ))
   return (
      <div className="Counter-row">
         {counters}
         {/* {counters} */}
         {/* [...{counterNum}] */}
         {/* <Counter /> */}
         {/* <Counter /> */}
      </div>
   )
}

export default CounterList
