import React from 'react'
import PropTypes from 'prop-types'

import { i18n, Link, withNamespaces } from '../i18n'

import Layout from '../components/Layout'
import Title from '../components/Title'
import Footer from '../components/Footer'

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer'],
    }
  }

  render() {
    const { t } = this.props
    return (
      <Layout>
        <Title />
      </Layout>
    )
  }
}

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('common')(Homepage)
