"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Gist;
exports.test = test;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _utils = require("../utils");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BASE_URL = 'https://gist.github.com/';
const EMBED_PROVIDER_URL = 'https://inkdrop-embed-provider.vercel.app/gist.html';
function test(url) {
  return url.startsWith(BASE_URL);
}
function Gist(props) {
  const {
    href
  } = props;
  const contentFrame = (0, _react.useRef)();
  const [frameId] = (0, _react.useState)('gist-' + Math.random());
  const url = `${EMBED_PROVIDER_URL}?url=${encodeURIComponent(href)}&id=${frameId}&origin=${_utils.isLocal ? 0 : 1}`;
  return /*#__PURE__*/React.createElement("iframe", {
    id: frameId,
    className: "embed-frame",
    ref: contentFrame,
    src: url
    // eslint-disable-next-line
    ,
    allowTransparency: "true"
  });
}