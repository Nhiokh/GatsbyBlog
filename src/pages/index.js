import React from 'react'
import Link from 'gatsby-link'

import Hoot from '../../static/assets/hoot.svg'

const IndexPage = () => (
  <div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop:'3rem'
      }}
    >
      <svg
        style={{
          height: '18vh',
          zIndex:100
        }}
      >
        <use xlinkHref={`#${Hoot.id}`}/>
      </svg>
    </div>
    <hr
      style={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderColor: 'grey',
        background: 'light-grey',
        position: 'relative',
        top: '-0.7vh',
      }}
    />
    <h1
      style={{
        textAlign:'center',
      }}
    >
      Hi there ! My name is Samuel Abiassi, UX Designer and Web Developer
    </h1>
    <hr
      style={{
        borderStyle: 'solid',
        borderWidth: '0px',
        borderColor: 'light-grey',
        background: 'light-grey',
        marginTop: '2rem'
      }}
    />
    <h2>Looking for a Super-Owl ?</h2>
    <p>If you ended up here, it most certainly means you are looking for someone who knows a little things or two about web development or UX design.</p>
    <p>Then let me ask you something...</p>
    <h2>What if I told you that you could get both ?</h2>
    <p>You don't want your end users to leave your application just because it isn't good enough, right ?</p>
    <p>Well... worry not, my friend! You've met the perfect owl for the job!</p>
    <p>You see, this website is the home of a special kind of bird. Not only one that knows how to develop web applications using the JAMStack, Progressive Web Apps, Service Workers etc.,
    but one that cares about how the final users are going to use them. From the look of it, to the whole experience.</p>
    <h2>Want to learn more about me ?</h2>
    <p>Then let me start by <Link to="/page-2/">introducing myself.</Link></p>
    <p>Interested in the tools and skills I use in development? <Link to="/page-2/">Might as well go here.</Link></p>
    <p>Is it the UX process that have picked your interest? Then, <Link to="/page-2/">head there!</Link></p>
  </div>
)

export default IndexPage
