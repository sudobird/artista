import React from "react"
import { graphql } from "gatsby"
import "./index.scss"
import { Link } from "gatsby"

export default function Home({ data }) {
  console.log(data)
  return (
    <div className="app-wrapper">
      Hello world! {data.pokemon.name} hi
      <Link to={"/blog/home"}>Home</Link>
    </div>
  )
}

export const query = graphql`
  query {
    pokemon {
      name
    }
  }
`
