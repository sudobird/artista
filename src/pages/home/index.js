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
`;

const Home = () => {
  return (
    <HomeWrapper>
      <SEO/>

      <div className="app-wrapper">
        <h1>Every day is a choice!</h1>
        <h2>Do the difficult thing!</h2>

        <Link to={"/blog/tech/simple-carousel-using-javascript-scrolling"}>carousel</Link>
      </div>
    </HomeWrapper>

  )
}

export default Home;
