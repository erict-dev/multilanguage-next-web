import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Header'
import Footer from './Footer'

import { withNamespaces } from '../i18n'

class Layout extends React.Component {
  render() {
    const { t } = this.props
    return (
        <React.Fragment>
            <Navbar />
            {this.props.children}
            <Footer />
        </React.Fragment>
    )
  }
}

Layout.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('common')(Layout)
