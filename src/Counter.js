import React, {useState, useEffect} from 'react'

function Counter() {
   const [count, setCount] = useState(0);
   const [adjust, setAdjust] = useState(0);

   useEffect(() => {
      document.title = `You clicked ${count} times`
   }, [count, adjust])

   return (
      <div className="Counter">
         <h3>Count: {count}</h3>
         <button onClick={()=>setCount(count - adjust)}>-</button>
         <button onClick={()=>setCount(count + adjust)}>+</button>
         <h3>Adjustment: {adjust}</h3>
         <button onClick={()=>setAdjust(adjust - 1)}>-</button>
         <button onClick={()=>setAdjust(adjust + 1)}>+</button>
      </div>
   )
}

export default Counter
