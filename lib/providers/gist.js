"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Gist;
exports.test = test;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const BASE_URL = 'https://gist.github.com/';
const EMBED_PROVIDER_URL = 'https://inkdrop-embed-provider.netlify.com/gist.html';

function test(url) {
  return url.startsWith(BASE_URL);
}

function Gist(props) {
  const {
    href
  } = props;
  const contentFrame = (0, React.useRef)();
  const [frameId] = (0, React.useState)('gist-' + Math.random());
  const url = `${EMBED_PROVIDER_URL}?url=${encodeURIComponent(href)}&id=${frameId}&origin=${_utils.isLocal ? 0 : 1}`;
  return /*#__PURE__*/React.createElement("iframe", {
    id: frameId,
    className: "embed-frame",
    ref: contentFrame,
    src: url
  });
}

Gist.prototype.propTypes = {
  href: _propTypes.default.string
};