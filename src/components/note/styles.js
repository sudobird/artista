import styled, {css} from "styled-components";
import {infoBorder, infoBg} from "../../common/style-constants"


const infoMixin = css`
  border-color: ${props => props.type === 'info' ? infoBorder : 'black'};
  background-color: ${props => props.type === 'info' ? infoBg : 'black'};
`


const NoteWrapper = styled.div`
  padding: 10px;
  border-top-left-radius: 5px;
  border-left: 5px solid black;
  
  ${infoMixin};
`

export default NoteWrapper;
