import createRemarkAnchor from './remark-anchor'
import { markdownRenderer } from 'inkdrop'

module.exports = {
  origAComponent: null,
  config: {
    autolinks: {
      title: 'Create embeds from standard URLs',
      type: 'boolean',
      default: true
    }
  },

  activate() {
    if (markdownRenderer) {
      this.setupLinkComponent()
    }

    window.addEventListener('message', this.handleMessageFromFrame, false)
  },

  deactivate() {
    if (markdownRenderer) {
      this.unsetLinkComponent()
    }
    window.removeEventListener('message', this.handleMessageFromFrame, false)
  },

  setupLinkComponent() {
    const OrigA = markdownRenderer.remarkReactComponents.a
    const RemarkAnchor = createRemarkAnchor(OrigA)
    markdownRenderer.remarkReactComponents.a = RemarkAnchor
    this.origAComponent = OrigA
  },

  unsetLinkComponent() {
    markdownRenderer.remarkReactComponents.a = this.origAComponent
  },

  handleMessageFromFrame(event) {
    const { data } = event
    if (data instanceof Object) {
      switch (data.message) {
        case 'embed:adjust-iframe-size':
          const { id, height } = data
          var i = document.getElementById(id)
          i.style.height = parseInt(height) + 'px'
          break
        case 'embed:open-external':
          const electron = require('electron')
          if (electron && electron.shell) {
            const { uri } = data
            electron.shell.openExternal(uri)
            break
          } else if (window.inkdrop.sendMessageToNative) {
            window.inkdrop.sendMessageToNative({
              message: 'core:open-link',
              params: { uri }
            })
          }
      }
    }
  }
}
