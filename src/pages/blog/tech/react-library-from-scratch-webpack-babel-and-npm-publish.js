import React from "react";
import Note from "../../../components/note"
import BlogLayout from "../../../components/blog-layout"
import Block from "../../../components/block"
import CodeHighlighter from "../../../components/code-highlighter"
import Highlighter from "../../../components/highlighter"
import {StaticImage} from "gatsby-plugin-image"

const helloWorldBrowserImg = '/images/react-lib-hello-world.png'
const projectImg = '/images/react-lib-project.png'

const seoParams = {
  title: "Create react library from scratch using Webpack and babel and publish on NPM",
  description: "Guide to create your own react library of one or more components using webpack and babel and publish on npm",
  image: projectImg,
  urlPath: "/blog/tech/react-library-from-scratch-and-npm-publish",
  article: true
}

const packageJsonFile =
  `
{
  "name": "hello",
  "version": "1.0.0",
  "description": "",
  "main": "dist/main.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "start": "webpack-dev-server --config webpack.dev.config.js",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.14.3",
    "@babel/preset-env": "^7.14.2",
    "@babel/preset-react": "^7.13.13",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.2.5",
    "html-webpack-plugin": "^5.3.1",
    "node-sass": "^6.0.0",
    "sass-loader": "^11.1.1",
    "style-loader": "^2.0.0",
    "url-loader": "^4.1.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "webpack": "^5.37.1",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.2",
    "webpack-node-externals": "^3.0.0"
  },
  "peerDependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
`

const babelRc =
`
  {
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": "10"
      }
    }],
    "@babel/preset-react"
  ]
}
`

const webpackDev =
`
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  devtool : 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
      },
    ]
  },
  devServer: {
    port: 5001
  }
};
`

const webpackBuild =
`
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: '/src/lib/index.js',
  output: {
    filename: "main.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
      },
    ],
  },
  externals: [nodeExternals()]
};
`

const indexHtml =
`
<!--<!DOCTYPE html>-->
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React Json Viewer</title>

</head>
<body>
<div id="root"></div>
</body>
</html>
`

const indexSrc =
`
import React from 'react';
import reactDom from 'react-dom';
import {HelloWorld, InputBox} from "./lib";

const App = () => {
  return(
    <div>
      <HelloWorld />
      <InputBox />
    </div>
  )
}
reactDom.render(<App/>, document.getElementById("root"));

`

const libIndex =
`
import React from "react";
import "./index.scss";


export const HelloWorld = () => {
  return (
    <div className="hello-wrapper">
      Hello world!
    </div>
  );
};

export const InputBox = () => {
  return(
    <div>
      <input />
    </div>
  )
}

/*
    make components directory for better structuring and export everything here.
    export {HelloWorld} from "./components/hello";
    export {InputBox} from "./components/input";
*/
`

const libScss =
`
.hello-wrapper {
  padding: 10px;
  font-family: sans-serif;
  font-size: 20px;
  color: red;
}
`

const indexTypescript =
`
export declare const HelloWorld;
export declare  const InputBox;
`

const consumerReact =
`
import {HelloWorld, InputBox} from 'hello';

const App = () => {
  return (
    <div className="App">
      <h1>This is consumer app</h1>
      <HelloWorld />
      <InputBox />
    </div>
  )
}
`

const ReactLib = () => {
  return (
    <BlogLayout seoParams={seoParams} title={seoParams.title} date='May 23, 2021' read={10}>
      <Block>
        Okay, so there is a simple solution for creating your own react library using bit.dev or create-react-library package which gives you the build process pre made. You just need to write your component and publish.
        But I personally like to have more control over the packages. For ex - create-react-library created an additional css file in the build and I had to include that css file in consumer project.
        I don't want that.
        <br/>
        We can use this to publish single component or multiple components. Doesn't matter.
        Let's start.
      </Block>

      <Block>
        <strong>Steps: </strong>
          <li>setup regular react project with webpack, babel</li>
          <li>set libraryTarget umd in webpack output</li>
          <li>set externals in webpack config to exclude node modules</li>
          <li>make a index.d.ts file in root to declare and export your component name</li>
          <li>point main file in package.json to output file generated in dist folder</li>
      </Block>

      <Block>
        <h3>Setting up react, webpack, babel</h3>
        <p>make a dir <Highlighter>hello</Highlighter> and run <Highlighter>npm init</Highlighter> inside it</p>
        <p>add <Highlighter>.gitignore</Highlighter> file to exclude node_modules</p>
        <p>install the following packages with -D flag (dev dependencies): </p>
        <br/>
        <Note>
          <p><strong>babel: </strong>@babel/core @babel/preset-env @babel/preset-react</p>
          <p><strong>webpack: </strong>webpack webpack-cli webpack-dev-server webpack-node-externals html-webpack-plugin node-sass</p>
          <p><strong>loaders: </strong>css-loader babel-loader sass-loader style-loader url-loader</p>
          <p><strong>react: </strong>react react-dom</p>
        </Note>
        You can use <Highlighter>styled-components</Highlighter> - the css in js concept. And you won't need these css, style and sass loader and node-sass.
        <br/>
        <Note type='info'>Webpack cli and dev server might create problems - version compatibility. You might need to hit and try with different versions.
          I had to downgrade webpack-cli version to 3.3.12 from latest version to make it work.</Note>
      </Block>

      <Block>
        The project should look like this
        <div><StaticImage src={`../../../../static${projectImg}`} width={300} alt='project-structure'/></div>
      </Block>

      <Block>
        This is the package.json file. Add the start and build scripts.
        <CodeHighlighter code={packageJsonFile} language='json'/>
        Notice the main file. You can add more details like keywords, github repo link, author etc.
      </Block>


      <Block>
        Add a <Highlighter>.babelrc</Highlighter> file
        <CodeHighlighter code={babelRc} language='json' />
        The env preset is evolving. There were some features like spread operator or async await didn't use to work directly and hence providing the node target helped.
        But now they work directly, so you can remove the node target parameter.
      </Block>

      <Block>
        Add a <Highlighter>webpack.dev.config.js</Highlighter> file. This will be used for development.
        <CodeHighlighter code={webpackDev} language='javascript' />
          <p>Here entry is src/index which imports the components and renders them in html root div.</p>
          <p><strong>HtmlWebpackPlugin</strong> is used to inject scripts and styles inside index.html</p>
          <p><strong>babel loader</strong> for transforming new es syntax to old compatible code.</p>
          <p>style loaders - they work in reverse order. <strong>sass-loader</strong> to transform scss into css.
            Then <strong>css-loader</strong> to load css styles. And then <strong>style-loader</strong> to put those styles into style tags.
            You can skip the options in style-loader.
          </p>
          <p><strong>url-loader</strong> for putting images into js</p>
      </Block>

      <Block>
        Add a <Highlighter>webpack.config.js</Highlighter> file - config for final build
        <CodeHighlighter code={webpackBuild} language='javascript' />
      </Block>

      <Block>
        Difference between dev and main webpack config is:
        <li>removed the source map, html plugin</li>
        <li>entry points to lib index</li>
        <li>added externals</li>
        Now you can add react and react-dom specifically in externals to leave them from building in our library code or
        you can use this plugin webpack-node-externals to exclude all node modules.
      </Block>

      <Block>
        <br/><strong>Let's write our sophisticated library components!</strong><br/>
        Add a src folder. make index.js, index.html, and a lib directory which will contain our components. We shall export 2 components.
        <p>The famous HelloWorld and the infamous InputBox</p>
        <Note type='info'>export all your components in the <Highlighter>src/lib/index.js</Highlighter> file</Note>
      </Block>

      <Block>
        <Highlighter>src/lib/index.js</Highlighter>
        <CodeHighlighter code={libIndex} language='javascript'/>
      </Block>

      <Block>
        <Highlighter>src/lib/index.scss</Highlighter>
        <CodeHighlighter code={libScss} language='scss'/>
      </Block>

      <Block>
        <Highlighter>src/index.html</Highlighter>
        <CodeHighlighter code={indexHtml} language='markdown'/>
      </Block>

      <Block>
        <Highlighter>src/index.js</Highlighter>
        <CodeHighlighter code={indexSrc} language='javascript'/>
      </Block>

      <Block>
        Everything is ready. Run npm start and open <Highlighter>localhost:5001</Highlighter>
        <StaticImage src={`../../../../static/${helloWorldBrowserImg}`} width={500} alt={'components-render'}/>
      </Block>

      <Block>
        Add a <Highlighter>index.d.ts</Highlighter> file to declare components.
        <CodeHighlighter code={indexTypescript} language='javascript'/>
      </Block>

      <Block>
        run <Highlighter>npm run build </Highlighter> and our library is ready to test and publish.
        You can test it in any regular 'create-react-app' by running <Highlighter>npm i ~/projects/hello</Highlighter>.
        <Note type='info'>If you use hooks in your library, everything will work fine in your library, but you might face issues while testing in consumer project. But don't worry, it will work fine after publishing. It's a known issue.</Note>
        <br/>
        <p>Here's consumer react project app.js</p>
        <CodeHighlighter code={consumerReact} language={'javascript'} />
      </Block>

      <Block>
        Now its very simple to publish. login to npm and publish. Make a readme.md file in the root and provide a good documentation.
        If your package is scoped like @abc/hello, you'll need to pass access public flag with publish command.
        <Note>
          <li>npm login</li>
          <li>npm publish --access public</li>
        </Note>
        <p>Everytime you update something, remember to update the version in package.json file, even if you update package or readme and follow the same steps.</p>
        <Note>I published a component with the same setup. You can refer it's code if you get stuck somewhere or face any node package version issues.
          <p><a href="https://www.npmjs.com/package/@sudobird/react-json-viewer" target='_blank'>https://www.npmjs.com/package/@sudobird/react-json-viewer</a></p>
        </Note>
      </Block>

      <Block>----- 🥳 Hurray 🥳 -----</Block>

    </BlogLayout>
  )
};

export default ReactLib;



