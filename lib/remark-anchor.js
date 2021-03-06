"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRemarkAnchor;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _providers = _interopRequireDefault(require("./providers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createRemarkAnchor(OrigA) {
  var _class, _temp;

  return _temp = _class = class RemarkAnchor extends React.Component {
    render() {
      const {
        href,
        children
      } = this.props;
      const [label] = children instanceof Array ? children : [];
      const isAutolinkEnabled = inkdrop.config.get('embed.autolinks');

      if (typeof label === 'string' && label.startsWith('embed') || isAutolinkEnabled && label === href) {
        for (const provider of _providers.default) {
          if (provider.test(href)) {
            const Component = provider.default;
            return React.createElement(Component, {
              href: href
            });
          }
        }
      }

      if (OrigA) {
        return React.createElement(OrigA, this.props, children);
      } else {
        return React.createElement("a", this.props, children);
      }
    }

  }, _defineProperty(_class, "propTypes", {
    href: _propTypes.default.string,
    children: _propTypes.default.node
  }), _temp;
}