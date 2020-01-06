import * as React from 'react'
import PropTypes from 'prop-types'
import providers from './providers'

export default function createRemarkAnchor(OrigA) {
  return class RemarkAnchor extends React.Component {
    static propTypes = {
      href: PropTypes.string,
      children: PropTypes.node
    }

    render() {
      const { href, children } = this.props
      const [label] = children instanceof Array ? children : []
      if (typeof label === 'string' && label.startsWith('embed')) {
        for (const provider of providers) {
          if (provider.test(href)) {
            const Component = provider.default
            return <Component href={href} />
          }
        }
      }
      if (OrigA) {
        return <OrigA {...this.props}>{children}</OrigA>
      } else {
        return <a {...this.props}>{children}</a>
      }
    }
  }
}
