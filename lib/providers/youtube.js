"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = YouTube;
exports.test = test;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BASE_URL = 'https://www.youtube.com/';
const EMBED_PROVIDER_URL = 'https://www.youtube.com/embed/';
function test(url) {
  return url.startsWith(BASE_URL);
}
function YouTube(props) {
  const {
    href
  } = props;
  const contentFrame = (0, _react.useRef)();
  const [frameId] = (0, _react.useState)('youtube-' + Math.random());
  const query = new URLSearchParams(href.split('?')[1]);
  const videoId = query.get('v');
  const url = `${EMBED_PROVIDER_URL}${videoId}`;
  return /*#__PURE__*/React.createElement("iframe", {
    id: frameId,
    className: "embed-frame",
    ref: contentFrame,
    height: "344",
    src: url,
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  });
}