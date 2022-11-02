import React, { useState, useEffect } from "react";
const Example = () => {
  const [count, setCount] = useState(10000);
  useEffect(()=>{
    document.title= `you click ${count}`
  })
  return (
    <div>
      <p>you click {count}</p>
      <button onClick={()=> setCount(count+1000)}>
        click on me
      </button>
    </div>
  );
};
export default Example