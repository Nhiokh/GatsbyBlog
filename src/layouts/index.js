import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Samuel Abiassi - Web Developer and UX/UI Designer"
      meta={[
        { name: 'description', content: 'Portfolio of Samuel Abiassi - Web Developer and UX/UI Designer - I mainly use JavaScript frameworks
         (Angular5, Vue, React) and Adobe XD  – Living in Grenoble (France) – Don’t hesitate to contact me for business projects' },
        { name: 'keywords', content: 'samuel, abiassi, portfolio, ux, design, web, developer, javascript, react, grenoble' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
