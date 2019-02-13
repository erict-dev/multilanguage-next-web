import React from 'react'
import PropTypes from 'prop-types'

import { Trans, i18n, Link, withNamespaces } from '../i18n'

import Layout from '../components/Layout'
import Footer from '../components/Footer'

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'home'],
    }
  }

  render() {
    const { t } = this.props
    return (
      <Layout>
          <h1>{t('home-title')}</h1>
      </Layout>
    )
  }
}

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('home')(Homepage)
