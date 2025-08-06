import { useState } from "react";
import { useEffect } from "react";

const UseState = () => {

   const [count, setCount] = useState(0)

    function handleIncrease(){
        setCount(count + 1);

    }

    function handleDecrease(){
        setCount(count-1)
        if(count <=0)
            setCount(0)

    } 
    
     useEffect(() => {
            console.log("The component mounted");
    }, [count]);

    console.log(count)

  return (
    <div>
        {count}
        <br />
        <button type="button" onClick={handleIncrease}>Increase</button>
        <button type="button" onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default UseState;