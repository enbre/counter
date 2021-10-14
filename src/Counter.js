import React, {useState, useEffect} from 'react'
import './CSS/Counter.css'

function Counter({ increment, id, updateTotal}) {
   const [count, setCount] = useState(0);
   const [adjust, setAdjust] = useState(0);

   useEffect(() => {
      document.getElementById(`Counter${id}` ).innerText = `Count: ${count}`
      updateTotal()
   }
   ,[count,id, updateTotal]
   )
   const increaseCount = () =>{
      setCount(count + increment + adjust)
   }
   const decreaseCount = () =>{
      setCount(count - increment - adjust)
   }

   return (
      <div className={`Counter animate__animated animate__bounceInDown ${count < 0 ? ' Counter-negative':''}`} value={count} >
         <div className="Counter-element">
            <h3 className="Counter-title" id = {`Counter${id}`} value = {count}> Count: {count}  </h3>
            <div className="Counter-buttons">
               <button  onClick={decreaseCount}>-</button>
               <button onClick={increaseCount}>+</button>
            </div>
         </div>
         <div className="Counter-element">
            <h4>Base increment: {increment}</h4>
         </div>
         <div className="Counter-element">
            <h4>Adjustment: {adjust}</h4>
            <div className="Counter-buttons">
               <button onClick={()=>setAdjust(adjust - 1)}>-</button>
               <button onClick={()=>setAdjust(adjust + 1)}>+</button>
            </div>
         </div>
         <div className="Counter-element">
            <h3>Increment: {adjust+increment}</h3>
         </div>
      </div>
   )
}

export default Counter
