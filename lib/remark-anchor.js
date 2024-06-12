"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRemarkAnchor;
var React = _interopRequireWildcard(require("react"));
var _providers = _interopRequireDefault(require("./providers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function createRemarkAnchor(OrigA) {
  return class RemarkAnchor extends React.Component {
    render() {
      const {
        href,
        children: label
      } = this.props;
      console.log('emed:::::::::', {
        href,
        label
      });
      const isAutolinkEnabled = inkdrop.config.get('embed.autolinks');
      if (typeof label === 'string' && typeof href === 'string') {
        if (label.startsWith('embed') || isAutolinkEnabled && label === href) {
          for (const provider of _providers.default) {
            if (provider.test(href)) {
              const Component = provider.default;
              return /*#__PURE__*/React.createElement(Component, {
                href: href
              });
            }
          }
        }
      }
      if (OrigA) {
        return /*#__PURE__*/React.createElement(OrigA, this.props, label);
      } else {
        return /*#__PURE__*/React.createElement("a", this.props, label);
      }
    }
  };
}