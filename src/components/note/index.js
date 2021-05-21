import React from "react";
import NoteWrapper from "./styles"

const Note = ({type, children}) => (
  <NoteWrapper type={type}>{children}</NoteWrapper>
)

export default Note;
