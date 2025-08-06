import React from 'react'
import { useEffect } from 'react'

const Useeffect = () => {
    useEffect(() => {
        console.log("The component mounted");
}, []);
  return (
    <div>Useeffect</div>
  )
};

export default Useeffect