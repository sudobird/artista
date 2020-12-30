import React, { useRef, useState } from "react"
import BlogLayout from "../../components/blog-layout"
import Block from "../../components/block"
import CodeBlock from "../../components/code-highlighter"


const seoParams = {
  title: "Simple Carousel using Javascript scrolling",
  description: "A very simple implementation of horizontal carousel using scrolling function in Javascript.",
  image: '/images/carousel-slider.png',
  urlPath: '/blog/simple-carousel-using-javascript-scrolling',
  article: true
}

const scrollIntoViewFunc = `
element.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
`

const carouselContainerStyles = `
.carousel-container {
  display: flex;
  height: 300px;
  width: 500px;
  overflow: hidden;
}
`

const nextClickedCode = `
const nextClicked = () => {
  if (activeInd < (totalItems - 1)) {
    const nextInd = activeInd + 1
    
    // get the element and call scrollIntoView
    containerRef.current.children[nextInd].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveInd(nextInd)
  }
}
`

const carouselCompCode = `
const CarouselComp = () => {
  const [activeInd, setActiveInd] = useState(0)
  const containerRef = useRef()
  const totalItems = 5

  const nextClicked = () => {
    if (activeInd < (totalItems - 1)) {
      const nextInd = activeInd + 1
      containerRef.current.children[nextInd].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      setActiveInd(nextInd)
    }
  }

  const previousClicked = () => {
    if (activeInd > 0) {
      const nextInd = activeInd - 1
      containerRef.current.children[nextInd].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      setActiveInd(nextInd)
    }
  }

  return (
    <div className='carousel-comp'>
      <div className='carousel-container' ref={containerRef}>
        <div className='carousel-item'>0</div>
        <div className='carousel-item'>1</div>
        <div className='carousel-item'>2</div>
        <div className='carousel-item'>3</div>
        <div className='carousel-item'>4</div>
      </div>

      <div className='carousel-actions'>
        <i className="fas fa-caret-square-left" onClick={previousClicked}></i>
        <i className="fas fa-caret-square-right" onClick={nextClicked}></i>
      </div>
    </div>
  )
}
`

export default () => {

  return (
    <BlogLayout seoParams={seoParams}>
      <div className='article'>
        <h1>Simple Carousel using smooth Javascript scrolling!</h1>
        <div style={{color: 'gray', fontSize: '16px'}}>December 10, 2020 &#9679; 3 min read </div>
        <br/>

        <div className='para'>
          There are various ways to implement carousel which give you more control on the animation.
          I discovered a really simple way to implement carousel by triggering scrolling function and its perfect for
          simple use cases.
        </div>

        <div className='para'><CarouselComp/></div>

        <div className='para'>
          We'll maintain the index of component/image in view to bring next element into view and we can disable next
          and previous buttons on edges.
          Onn click of any of those buttons we'll take that element and call this
          function. <strong>inline</strong> parameter is for horizontal scrolling. There's another
          parameter <strong>block</strong> which you can experiment with.
        </div>

        <div className='para'><CodeBlock code={scrollIntoViewFunc} language='javascript'/></div>

        <div className='para'><Block type='info'><strong>Note:</strong> Important parameter here is smooth behavior
          which makes this cool animation possible.</Block></div>

        <div className='para'>
          Make a container div with scroll auto, display flex and add some elements to it. When you are satisfied with
          your
          normal scrolling design, set <strong>overflow to hidden.</strong> This is important cause we'll do that on
          button clicks and of course we don't
          involuntary mouse scrolls.
        </div>

        <div className='para'>
          <img src='/images/carousel-slider.png' className='image' alt='carousel-slider'/>
        </div>

        <div className='para'>
          <CodeBlock code={carouselContainerStyles} language='css'/>
        </div>

        <div className='para'>
          Then on next or previous click, get the DOM element and call scrollIntoView on the element with right
          parameters according to your carousel alignment.
        </div>

        <div className='para'>
          <CodeBlock code={nextClickedCode} language='javascript'/>
        </div>
        <div className='para'>
          <Block type='info'>
            I've used ref on the container and then accessed its children using the index. In Angular it can be achieved
            using @ViewChildren.
          </Block>
        </div>

        <div className='para'>Here's the full code of this simple carousel component.</div>

        <div className='para'>
          <CodeBlock code={carouselCompCode} language='javascript'/>
        </div>
      </div>
    </BlogLayout>
  )
}

const CarouselComp = () => {
  const [activeInd, setActiveInd] = useState(0)
  const containerRef = useRef()
  const totalItems = 5

  const nextClicked = () => {
    if (activeInd < (totalItems - 1)) {
      const nextInd = activeInd + 1
      containerRef.current.children[nextInd].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      setActiveInd(nextInd)
    }
  }

  const previousClicked = () => {
    if (activeInd > 0) {
      const nextInd = activeInd - 1
      containerRef.current.children[nextInd].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
      setActiveInd(nextInd)
    }
  }

  const handleKeyDown = () => {
  }

  return (
    <div className='carousel-comp'>
      <div className='carousel-container' ref={containerRef}>
        <div className='carousel-item' style={{ "background": "linear-gradient(to right, #134e5e, #71b280)" }}>0</div>
        <div className='carousel-item' style={{ "background": "linear-gradient(to right, #614385, #516395)" }}>1</div>
        <div className='carousel-item' style={{ "background": "linear-gradient(to right, #1f1c2c, #928dab)" }}>2</div>
        <div className='carousel-item' style={{ "background": "linear-gradient(to right, #16222a, #3a6073)" }}>3</div>
        <div className='carousel-item' style={{ "background": "linear-gradient(to right, #1d2b64, #f8cdda)" }}>4</div>
      </div>

      <div className='carousel-actions'>
        <i className="fas fa-caret-square-left" onClick={previousClicked} onKeyDown={handleKeyDown} role='button'
           tabIndex={0} aria-label="previous"></i>
        <i className="fas fa-caret-square-right" onClick={nextClicked} onKeyDown={handleKeyDown} role='button'
           tabIndex={0} aria-label="next"></i>
      </div>
    </div>
  )
}


