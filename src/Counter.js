import React, {useEffect} from 'react'

function Counter({count, adjust, increment, updateCount}) {
   // const [count, setCount] = useState(0),
   // [adjust, setAdjust] = useState(0)


   useEffect(() => {
      // document.getElementById("{props.key}" ).innerHTML = `Count: ${count+base+adjust}`
      document.querySelector("h3" ).innerHTML = `Count: ${count}`
      // console.log(`count: ${count}, base: ${base}, adjust: ${adjust}`)
   }
   ,[ count]
   )
   const increaseCount = ()=>{
      // updateCount(key,count + 1 )
   }
   const decreaseCount = ()=>{

   }
   return (
      <div className="Counter">
         <h3> Count: {count}</h3>
         <button onClick={decreaseCount}>-</button>
         <button onClick={increaseCount}>+</button>
         <h3>Base unit: {increment}</h3>
         {/* <h3>Adjustment: {adjust}</h3>
         <button onClick={()=>setAdjust(adjust - 1)}>-</button>
         <button onClick={()=>setAdjust(adjust + 1)}>+</button> */}
      </div>
   )
}

export default Counter
