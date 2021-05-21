import React, { useEffect, useRef } from "react"
import hljs from "highlight.js/lib/core"
import "highlight.js/styles/github.css"
import CodeHighlighterWrapper from "./styles"

const CodeHighlighter = ({ code, language }) => {
  const nodeRef = useRef()

  useEffect(() => {

    import(`highlight.js/lib/languages/${language}`).then(module => {
      hljs.registerLanguage(language, module.default)

      if (nodeRef) {
        hljs.configure({ tabReplace: "  " })
        hljs.highlightBlock(nodeRef.current)
      }
    }).catch(e => {
      console.log(e)
    })

  }, [language])

  return (
    <CodeHighlighterWrapper>
      <div ref={nodeRef} className='code-highlighter-container'>
      <pre>
				{code}
      </pre>
      </div>
    </CodeHighlighterWrapper>
  )
}

export default CodeHighlighter
