import React from 'react'
import PropTypes from 'prop-types'

import { Trans, withNamespaces } from '../i18n'

class Footer extends React.Component {
  render() {
    const { t } = this.props
    return (
        <footer>
            <p><Trans i18nKey="description2" /></p>
        </footer>
    )
  }
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('footer')(Footer)
