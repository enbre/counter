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
      <div className="Counter animate__animated animate__bounceInDown" value={count} >
      {/* // <div className="Counter animate__animated animate__rollOut" value={count} > */}
         <h3 className="Counter-title" id = {`Counter${id}`} value = {count}> Count: {count}</h3>
         <button  onClick={decreaseCount}>-</button>
         <button onClick={increaseCount}>+</button>
         <h4>Increment: {increment}</h4>
         <h4>Increment adjust: {adjust}</h4>
         <button onClick={()=>setAdjust(adjust - 1)}>-</button>
         <button onClick={()=>setAdjust(adjust + 1)}>+</button>
         <h4>Increment adjust: {adjust+increment}</h4>
      </div>
   )
}

export default Counter
