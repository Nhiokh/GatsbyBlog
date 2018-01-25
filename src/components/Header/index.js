import React from 'react'
import Link from 'gatsby-link'

import './header.scss'

class Menu extends React.Component  {
  constructor(props){
    super(props)
    this.state= {
      width: 0
    }
  }

  updateDimensions = () => {
    this.setState({width:document.body.clientWidth})
  }

  componentDidMount(){
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions);
  }

  render(){
    if (this.state.width > 500) {
      return (
        <ul
          style={{
            width: '100%',
            lineHeight: 'normal',
            margin: '0',
            marginLeft: 16,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            listStyleType: 'none',
            color: 'white'
          }}
        >
          <Link to="/" style={{color: 'white', textShadow: 'none'}}><li>About</li></Link>
          <Link to="/" style={{color: 'white', textShadow: 'none'}}><li>UX</li></Link>
          <Link to="/" style={{color: 'white', textShadow: 'none'}}><li>Dev</li></Link>
          <Link to="/" style={{color: 'white', textShadow: 'none'}}><li>Blog</li></Link>
          <Link to="/" style={{color: 'white', textShadow: 'none'}}><li>Contact</li></Link>
        </ul>
      )
    } else {
      return (
        <div
          className="mobile-app-bar"
          style={{
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            height: '60px',
            bottom: 0,
            left: 0,
            width: '100%',
            background: '#eee',
            fontFamily: 'sans-serif'
          }}
        >
          <span>About</span>
          <span>UX</span>
          <span>Dev</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
      )
    }
  }
}

const Header = () => (
  <div
    className='header'
    style={{
      background: '#5799a9',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.10rem 1rem',
      }}
    >
      <span style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textShadow: 'none'
          }}
        >
          <img
            src='https://res.cloudinary.com/nhiokh/image/upload/c_scale,h_45,q_64/v1516876441/logo_xrxshx.png'
            style={{
              marginBottom: 0
            }}
          />
        </Link>
      </span>
      <Menu />
    </div>
  </div>
)

export default Header
