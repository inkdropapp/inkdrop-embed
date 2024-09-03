import React from 'react'
import providers from './providers'

export default function createRemarkAnchor(OrigA) {
  return class RemarkAnchor extends React.Component {
    render() {
      const { href, children: label, title } = this.props
      const isAutolinkEnabled = inkdrop.config.get('embed.autolinks')
      if (typeof label === 'string' && typeof href === 'string') {
        if (
          label === 'embed' ||
          title === 'embed' ||
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
        return <OrigA {...this.props}>{label}</OrigA>
      } else {
        return <a {...this.props}>{label}</a>
      }
    }
  }
}
