import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return <div>This is home page</div>
}

export const query = graphql`
  query {
    pokemon {
      name
    }
  }
`
