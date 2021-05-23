import React from "react"
import { Link } from "gatsby"
import SEO from "../../components/seo"

import styled from "styled-components";

const HomeWrapper = styled.div`
  background-color: gainsboro;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  a {
    color: darkcyan;
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <SEO/>

      <div className="app-wrapper">
        <h1>Every day is a choice!</h1>
        <br/>
        <p><Link to={"/blog/tech/simple-carousel-using-javascript-scrolling"}>Carousel</Link></p>
        <p><Link to={"/blog/tech/react-library-from-scratch-webpack-babel-and-npm-publish"}>Create React Library</Link></p>
      </div>
    </HomeWrapper>
  )
}

export default Home;
