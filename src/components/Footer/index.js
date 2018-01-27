import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
 <div
   style={{
     textAlign: 'center',
     borderTop: '2px solid #5799a9',
     padding: '24px'
   }}
  >
    <p
      style={{
        marginBottom:0,
        fontSize: '0.8em'
      }}
    >Created with <a target="_blank" href='https://reactjs.org/'>React</a> | <a target="_blank" href='https://www.gatsbyjs.org/'>Gatsby</a> | <a target="_blank" href='https://www.netlify.com/'>Netlify</a> - 2018</p>
 </div>
)

export default Footer
