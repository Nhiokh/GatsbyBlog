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
    >Created with <Link to='https://reactjs.org/'>React</Link> | <Link to='https://www.gatsbyjs.org/'>Gatsby</Link> | <Link to='https://www.netlify.com/'>Netlify</Link> - 2018</p>
 </div>
)

export default Footer
