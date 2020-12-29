import React from "react"

const Block = props => (
  <div className={`${props.type}-block`}>
    {props.children}
  </div>
)

export default Block;
