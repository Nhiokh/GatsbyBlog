import React from 'react'

import Contact from '../components/Contact/index'

const ContactPage = () => (
  <div>
    <h1>Wanna stay in touch?</h1>
    <p>I usually hang around the following places:</p>
    <ul>
      <a target="_blank" href="https://twitter.com/Nhiokh"><li>Twitter</li></a>
      <a target="_blank" href="https://www.facebook.com/samuel.abiassi"><li>Facebook</li></a>
      <a target="_blank" href="https://www.linkedin.com/in/samuel-abiassi-17ab0323/"><li>LinkedIn</li></a>
    </ul>
    <h2
      style={{
        textAlign:'center',
        borderTop: '1px solid #aaa',
        paddingTop:'24px'
      }}
    >
      Or use the following form to contact me!
    </h2>
    <Contact/>
  </div>
)

export default ContactPage
