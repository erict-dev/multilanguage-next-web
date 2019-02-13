import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

import { withNamespaces, Link } from '../i18n'

class About extends React.Component {

  static async getInitialProps() {
    return {
      namespacesRequired: ['about'],
    }
  }

  render() {
    const { t } = this.props
    return (
      <Layout>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
      </Layout>
    )
  }
}

About.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('about')(About)
