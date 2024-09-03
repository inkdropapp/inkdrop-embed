"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRemarkAnchor;
var _react = _interopRequireDefault(require("react"));
var _providers = _interopRequireDefault(require("./providers"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function createRemarkAnchor(OrigA) {
  return class RemarkAnchor extends _react.default.Component {
    render() {
      const {
        href,
        children: label,
        title
      } = this.props;
      const isAutolinkEnabled = inkdrop.config.get('embed.autolinks');
      if (typeof label === 'string' && typeof href === 'string') {
        if (label === 'embed' || title === 'embed' || isAutolinkEnabled && label === href) {
          for (const provider of _providers.default) {
            if (provider.test(href)) {
              const Component = provider.default;
              return /*#__PURE__*/_react.default.createElement(Component, {
                href: href
              });
            }
          }
        }
      }
      if (OrigA) {
        return /*#__PURE__*/_react.default.createElement(OrigA, this.props, label);
      } else {
        return /*#__PURE__*/_react.default.createElement("a", this.props, label);
      }
    }
  };
}