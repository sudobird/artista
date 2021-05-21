import React from "react"
import SEO from "../seo"
import BlogLayoutWrapper from "./styles"

const BlogLayout = props => {
  return (
    <BlogLayoutWrapper>
      <SEO {...props.seoParams || {}}/>
      <h1>{props.title}</h1>
      <div className='desc'>{props.date} &#9679; {props.read} min read</div>
      {props.children}
    </BlogLayoutWrapper>
  )
}

export default BlogLayout;
