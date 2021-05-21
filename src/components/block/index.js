import React from "react"
import styled from "styled-components"

const BlockWrapper = styled.div`
  line-height: 1.5;
  margin-top: 50px;
`

const Block = ({children}) => {
  return (
    <BlockWrapper>{children}</BlockWrapper>
  )
}

export default Block;
