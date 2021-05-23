import React from "react"
import styled from "styled-components"

const HighlighterWrapper = styled.span`
  padding: 0 5px;
  border-radius: 2px;
  background-color: gainsboro;
`

const Highlighter = ({type, children}) => (
  <HighlighterWrapper type={type}>{children}</HighlighterWrapper>
)

export default Highlighter;
