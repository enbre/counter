import React, {useState} from 'react'
const [count, setCount] = useState(0);

function Counter() {

   return (
      <div className="Counter">
         <h3>Counter: {count}</h3>
         <button onClick={()=>setCount(count - 1)}>-</button>
         <button onClick={()=>setCount(count + 1)}>+</button>
      </div>
   )
}

export default Counter
