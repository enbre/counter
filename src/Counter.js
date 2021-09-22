import React, {useState, useEffect} from 'react'

function Counter() {
   const [count, setCount] = useState(0),
   [adjust, setAdjust] = useState(0),
   [base, setBase] = useState(0);


   useEffect(() => {
      document.querySelector("h3" ).innerHTML = `Count: ${count+base+adjust}`
      // console.log(`count: ${count}, base: ${base}, adjust: ${adjust}`)
   }
   ,[ count,adjust, base]
   )

   return (
      <div className="Counter">
         <h3> Count: banana</h3>
         <button onClick={()=>setCount(count - (base+adjust))}>-</button>
         <button onClick={()=>setCount(count + (base+adjust))}>+</button>
         {/* <h3>Base unit: {base}</h3>
         <button onClick={()=>setBase(base - 1)}>-</button>
         <button onClick={()=>setBase(base + 1)}>+</button> */}
         <h3>Adjustment: {adjust}</h3>
         <button onClick={()=>setAdjust(adjust - 1)}>-</button>
         <button onClick={()=>setAdjust(adjust + 1)}>+</button>
      </div>
   )
}

export default Counter
