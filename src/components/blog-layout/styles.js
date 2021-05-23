import styled from "styled-components";


const BlogLayoutWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 50px 20px 100px 20px;
  font-size: 20px;
  word-break: break-word;
  letter-spacing: -0.003em;
  overflow: auto;
  
  .desc {
    color: gray;
    font-size: 16px;
  }
  
  .highlight {
    padding: 0 5px;
    border-radius: 2px;
    background-color: gainsboro;
  }
`

export default BlogLayoutWrapper;
