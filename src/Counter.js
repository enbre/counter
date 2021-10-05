import React, {useState, useEffect} from 'react'
import './CSS/Counter.css'

function Counter({ increment, id, updateTotal}) {
   const [count, setCount] = useState(0);


   useEffect(() => {
      document.getElementById(`Counter${id}` ).innerText = `Count: ${count}`
   }
   ,[count, increment, id]
   )
   const increaseCount = () =>{
      setCount(count + increment)
      updateTotal()
   }
   const decreaseCount = () =>{
      setCount(count - increment)
      updateTotal()
   }

   return (
      <div className="Counter" value={count} >
         <h3 className="Counter-title" id = {`Counter${id}`} value = {count}> Count: {count}</h3>
         <button  onClick={decreaseCount}>-</button>
         <button onClick={increaseCount}>+</button>
         {/* <h3>Adjustment: {adjust}</h3>
         <button onClick={()=>setAdjust(adjust - 1)}>-</button>
         <button onClick={()=>setAdjust(adjust + 1)}>+</button> */}
      </div>
   )
}

export default Counter
