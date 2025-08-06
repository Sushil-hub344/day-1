import { useState } from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState(false);

    function handleToggle(){
      setToggle(!toggle);
    }
    console.log(toggle);
  return (
    <div>
      {toggle}
         {toggle ? 'On' : 'Off'}
        
        <br/>
        <button type="button" onClick={handleToggle}>Toggle</button>
      
    </div>
  )
}

export default Toggle