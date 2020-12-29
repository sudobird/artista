import React from "react"
import SEO from "./seo"

const BlogLayout = props => {
  return (
    <div>
      <SEO {...props.seoParams || {}}/>
      {props.children}
    </div>
  )
}

export default BlogLayout;
