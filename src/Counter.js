import React, {useState, useEffect} from 'react'
import './CSS/Counter.css'

function Counter({count, adjust, increment, id, updateCount}) {
   const [countt, setCountt] = useState(0);


   useEffect(() => {
      document.getElementById(`Counter${id}` ).innerText = `Count-internal: ${countt}`
      // document.querySelector("h3" ).innerHTML = `Count: ${count}`
      // console.log(`count: ${count}, adjust: ${adjust}`)
   }
   ,[countt, increment, id]
   )
   const increaseCount = ()=>{
      updateCount(id,count + 1 )
      console.log(`counter: ${id} count: ${count}  increment: ${increment}`)
   }
   const decreaseCount = ()=>{
      // console.log(`counter: ${id} count: ${count}  increment: ${increment}`)
      const sel = document.getElementById(`Counter${id}`)
      console.log(sel)
   }
   return (
      // <div className="Counter" id= {id} >
      <div className="Counter"  >
         <h3> Count: {count}</h3>
         <button onClick={decreaseCount}>-</button>
         <button onClick={increaseCount}>+</button>
         <h3 id = {`Counter${id}`} value = {countt}> Count: {countt}</h3>
         <button onClick={()=>setCountt(countt-increment)}>-</button>
         <button onClick={()=>setCountt(countt+increment)}>+</button>
         {/* <h3>Adjustment: {adjust}</h3>
         <button onClick={()=>setAdjust(adjust - 1)}>-</button>
         <button onClick={()=>setAdjust(adjust + 1)}>+</button> */}
      </div>
   )
}

export default Counter
