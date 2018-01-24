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
    if (this.state.width > 700) {
      return (
        <ul
          style={{
            lineHeight: 'normal',
            margin: '0',
            marginLeft: 16,
            display: 'flex',
            alignItems: 'center',
            listStyleType: 'none',
            color: 'white'
          }}
        >
          <li>hohoho</li>
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
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <span style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Place logo
        </Link>
      </span>
      <Menu />
    </div>
  </div>
)

export default Header
