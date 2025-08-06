import React from 'react'
import CompB from "./CompB";
const CompA = (props) => {
  return (
    <div>
        <CompB data={props.data} />
        </div>
  )
}

export default CompA;