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
      const isAutolinkEnabled = inkdrop.config.get('embed.autolinks')
      if (typeof label === 'string' && typeof href === 'string') {
        if (
          label.startsWith('embed') ||
          (isAutolinkEnabled && label === href)
        ) {
          for (const provider of providers) {
            if (provider.test(href)) {
              const Component = provider.default
              return <Component href={href} />
            }
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
