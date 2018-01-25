import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <h2>Only set the base (or body) font-size/line-height</h2>
    <p>Only set your body font size and then derive all other font sizes from that.</p>
    <h2>Pick font sizes from a scale and then set the “scale ratio”</h2>
    <p>Pick other font sizes (e.g. for headers) off a scale. The scale ratio determines the exact font size that’s choosen. Don’t set exact header sizes. Instead pick where to place them on a scale. Like everything in Typography.js, we’re only concerned about defining the relationship between elements and then compiling these relationships into actual pixels sizes on the screen.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
