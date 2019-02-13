import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import { i18n, withNamespaces } from '../i18n'

class Navbar extends React.Component {
  render() {
    const { t } = this.props
    return (
        <div>
            <Link href="/">
                <a>{t('home')}</a>
            </Link>
            <Link href="/about">
                <a>{t('about')}</a>
            </Link>
            <button
              type='button'
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'cn' : 'en')}
            >
              {t('change-locale')}
            </button>
        </div>
    )
  }
}

Navbar.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withNamespaces('navbar')(Navbar)

