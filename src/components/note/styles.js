import styled, {css} from "styled-components";
import {infoBorder, infoBg} from "../../common/style-constants"


const infoMixin = css`
  border-color: ${props => props.type === 'info' ? infoBorder : ''};
  background-color: ${props => props.type === 'info' ? infoBg : ''};
`


const NoteWrapper = styled.div`
  margin: 10px 0;
  font-size: 18px;
  padding: 10px;
  border-top-left-radius: 5px;
  border-left: 5px solid gainsboro;
  background-color: gainsboro;
  
  ${infoMixin};
`

export default NoteWrapper;
