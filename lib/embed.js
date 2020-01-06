"use strict";

var _remarkAnchor = _interopRequireDefault(require("./remark-anchor"));

var _inkdrop = require("inkdrop");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  origAComponent: null,

  activate() {
    if (_inkdrop.markdownRenderer) {
      this.setupLinkComponent();
    }

    window.addEventListener('message', this.handleMessageFromFrame, false);
  },

  deactivate() {
    if (_inkdrop.markdownRenderer) {
      this.unsetLinkComponent();
    }

    window.removeEventListener('message', this.handleMessageFromFrame, false);
  },

  setupLinkComponent() {
    const OrigA = _inkdrop.markdownRenderer.remarkReactComponents.a;
    const RemarkAnchor = (0, _remarkAnchor.default)(OrigA);
    _inkdrop.markdownRenderer.remarkReactComponents.a = RemarkAnchor;
    this.origAComponent = OrigA;
  },

  unsetLinkComponent() {
    _inkdrop.markdownRenderer.remarkReactComponents.a = this.origAComponent;
  },

  handleMessageFromFrame(event) {
    const {
      data
    } = event;

    if (data instanceof Object) {
      switch (data.message) {
        case 'embed:adjust-iframe-size':
          const {
            id,
            height
          } = data;
          var i = document.getElementById(id);
          i.style.height = parseInt(height) + 'px';
          break;

        case 'embed:open-external':
          const electron = require('electron');

          if (electron && electron.shell) {
            const {
              uri
            } = data;
            electron.shell.openExternal(uri);
            break;
          } else if (window.inkdrop.sendMessageToNative) {
            window.inkdrop.sendMessageToNative({
              message: 'core:open-link',
              params: {
                uri
              }
            });
          }

      }
    }
  }

};