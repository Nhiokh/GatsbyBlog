import React from 'react'
import Link from 'gatsby-link'

import Contact from '../components/Contact/index'

const imgLabelStyle = {
  marginTop:0,
  marginBottom:'48px',
  textAlign: 'center'
}

const DevPage = () => (
  <div>
    <h1>I LOVE JavaScript</h1>
    <p>Ok... this might not be the most popular thing to start of a conversation, but damn, I'll say it again.</p>
    <p>I. LOVE. JAVASCRIPT.</p>
    <h2>I'm (mostly) a front-end developer</h2>
    <p>
      As a developer, I have mostly worked on client-side. Why? Well... mostly because of my marketing/communication/UX design background. I am attached to convey significant
      messages to users, because that's what is making me happy. And there isn't many ways to do it, especially if you're working on the server-side.
    </p>
    <p>
      So I've been looking for the best tools to work with on this new Node.js era of the internet. And here are my weapons of choice.
    </p>
    <h2>Frameworks, libraries and tools</h2>
    <p>
      For some times now, I've been playing with React. I've acquired a good grasp of the concepts and methodology around it, and did dive a lot on its ecosystem.
    </p>
    <p>Namely, I've worked with :</p>
    <ul>
      <li>React Router (self-explanatory)</li>
      <li>Apollo Server (client-side server handling GraphQL request)</li>
      <li>GraphQL (WONDERFULL query langage - Rest API killer)</li>
      <li>Gatsby (JS static site generator)</li>
      <li>Material-UI (React component library)</li>
      <li>Chart-JS (Data graphics tool)</li>
      <li>Webpack (Assets bundler)</li>
      <li>Babel (Make using ES6 possible)</li>
      <li>Parcel (Assets bundler (without Webpack's complexity))</li>
      <li>Flow (JS static type checker)</li>
      <li>etc.</li>
    </ul>
    <p>However, I did also try a bit of Vue.js which has been quite a delightful tool to work with, and I'm looking forward to using it a lot more.</p>
    <p>
      Of course, I've also been using Sass a lot to upgrade my stylesheets game, and I am not stranger to css frameworks like Bootstrap. However, I largely
      prefer to template things on my own, with the help of CSS Grid and Flexbox.
    </p>
    <p>
      I'm using Github for my versioning, and Netlify to host public projects. If you haven't tested this type of service yet, I strongly advise you to check it out.
    </p>
    <p>As a foot-note, I usually develop on Atom (Nuclide IDE).</p>
    <h2>Want to see by yourself?</h2>
    <p>
      Here is a collection of my codepens using mostly React and Vue.
    </p>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '600px',
        margin: 'auto'
      }}
    >
      <a
        href="https://codepen.io/Nhiokh/pen/xPWKgZ"
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'none'
        }}
      >
        <img
          src="https://res.cloudinary.com/nhiokh/image/upload/v1517066257/Capture_idqmyj.png"
          alt="test1"
          style={{marginBottom:'4px'}}
        />
        <p
          style={imgLabelStyle}
        >
          Simple Pomodoro timer using React
        </p>
      </a>
      <a
        href="https://codepen.io/Nhiokh/pen/EbLzWz"
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'none'
        }}
      >
        <img
          src="https://res.cloudinary.com/nhiokh/image/upload/v1517066159/CaptureTTT_wcnwmq.png"
          alt="test2"
          style={{marginBottom:'4px'}}
        />
        <p
          style={imgLabelStyle}
        >
          Tic-Tac-Toe using React
        </p>
      </a>
      <a
        href="https://codepen.io/Nhiokh/pen/bYoZbw"
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundImage: 'none'
        }}
      >
        <img
          src="https://res.cloudinary.com/nhiokh/image/upload/v1517066232/CaptureCalc_hx4gwe.png"
          alt="test3"
          style={{marginBottom:'4px'}}
        />
        <p
          style={imgLabelStyle}
        >
          Calculator using React
        </p>
      </a>
    </div>
    <p>
      You will also find react starter packs on my Github account.
    </p>
    <h2
      style={{
        textAlign:'center',
        borderTop: '1px solid #aaa',
        paddingTop:'24px'
      }}
    >
      Convinced? Want to know more? Contact me!
    </h2>
    <Contact/>
  </div>
)

export default DevPage
