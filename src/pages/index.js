import React from "react"
import { graphql } from "gatsby";
import "./index.scss";
import { Link } from "gatsby";
import Img from "gatsby-image"


export default ({data}) => {
	console.log(data);

	return (
		<div className="app-wrapper">


			Hello world! {data.pokemon.name}
			<br/>
			<br/>
			<Link to={"/blog/simple-carousel-using-javascript-scrolling"}>carousel</Link>
			<br/>
			<br/>
			{/*<img src={BG} className='bg-img'/>*/}
			{/*<Img fixed={data.file.childImageSharp.fixed} />*/}
			<Img fluid={data.file.childImageSharp.fluid} alt="Photo of Me" className='bg-img'/>
		</div>
	)
}

export const query = graphql`
		query {
				site {
					siteMetadata {
						title
					}
				}
				pokemon {
						name
				}
				file(relativePath: { eq: "images/bg.jpg" }) {
						childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
						}
				}
		}
`
