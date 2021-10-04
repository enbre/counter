import React, {useState, useEffect} from 'react'
import './CSS/Counter.css'

function Counter({ increment, id, updateCount}) {
   const [count, setCount] = useState(0);


   useEffect(() => {
      document.getElementById(`Counter${id}` ).innerText = `Count: ${count}`
      // document.querySelector("h3" ).innerHTML = `Count: ${count}`
      // console.log(`count: ${count}, adjust: ${adjust}`)
   }
   ,[count, increment, id]
   )
   const increaseCount = ()=>{
      updateCount(id,count + 1 )
      console.log(`counter: ${id} count: ${count}  increment: ${increment}`)
   }
   const decreaseCount = ()=>{
      // console.log(`counter: ${id} count: ${count}  increment: ${increment}`)
      // const sel = document.getElementById(`Counter${id}`)
      const sel3 = [];
      // const sel = document.querySelectorAll(`.Counter`)
      // const sel = 
      document.querySelectorAll(`.Counter`).forEach(val =>
         sel3.push(parseInt(val.attributes.value.value)))
      // console.log(Array.from(sel)[0])
      // sel.forEach(val => 
         // sel3.push(parseInt(val.attributes.value.value)))
      const total = sel3.reduce((a,b)=> a+b)   
      console.log('total: ',total)
      // console.log(sel.keys(1), sel.values(2))
      // console.log(sel.forEach(
      //    console.log(attribute.value.value)
      // ))
      // console.log(parseInt(sel[0].attributes.value.value))
   }

   return (
      // <div className="Counter" id= {id} >
      <div className="Counter" value={count} >
         <button onClick={decreaseCount}>-</button>
         <button onClick={increaseCount}>+</button>
         <h3 className="Counter-title" id = {`Counter${id}`} value = {count}> Count: {count}</h3>
         <button  onClick={()=>setCount(count-increment)}>-</button>
         <button onClick={()=>setCount(count+increment)}>+</button>
         {/* <h3>Adjustment: {adjust}</h3>
         <button onClick={()=>setAdjust(adjust - 1)}>-</button>
         <button onClick={()=>setAdjust(adjust + 1)}>+</button> */}
      </div>
   )
}

export default Counter
