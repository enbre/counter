import React, {useEffect} from 'react'

function Counter({count, adjust, increment, key, id,updateCount}) {
   // const [count, setCount] = useState(0),
   // [adjust, setAdjust] = useState(0)


   useEffect(() => {
      document.getElementById(`Counter${id}` ).innerText = `Count: ${count}`
      // document.querySelector("h3" ).innerHTML = `Count: ${count}`
      // console.log(`count: ${count}, adjust: ${adjust}`)
   }
   
   )
   const increaseCount = ()=>{
      updateCount(id,count + 1 )
      console.log(`id: ${id} count: ${count} key:  ${key} increment: ${increment}`)
   }
   const decreaseCount = ()=>{
      console.log(`id: ${id} count: ${count} key:  ${key} increment: ${increment}`)
   }
   return (
      // <div className="Counter" id= {id} >
      <div className="Counter"  >
         <h3 id = {`Counter${id}`}> Count: {count}</h3>
         <button onClick={decreaseCount}>-</button>
         <button onClick={increaseCount}>+</button>
         {/* <h3>Base unit: {increment}</h3> */}
         {/* <h3>Adjustment: {adjust}</h3>
         <button onClick={()=>setAdjust(adjust - 1)}>-</button>
         <button onClick={()=>setAdjust(adjust + 1)}>+</button> */}
      </div>
   )
}

export default Counter
