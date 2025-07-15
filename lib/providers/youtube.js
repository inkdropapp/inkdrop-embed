"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = YouTube;
exports.extractVideoIdFromURL = extractVideoIdFromURL;
exports.test = test;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BASE_URLS = ['https://www.youtube.com/', 'https://youtu.be/'];
const EMBED_PROVIDER_URL = 'https://www.youtube.com/embed/';
function test(url) {
  return BASE_URLS.some(baseUrl => url.startsWith(baseUrl));
}
function extractVideoIdFromURL(url) {
  if (url.startsWith('https://www.youtube.com/')) {
    const query = new URLSearchParams(url.split('?')[1]);
    return query.get('v');
  } else if (url.startsWith('https://youtu.be/')) {
    const parts = url.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart.split('?')[0];
  }
  return null;
}
function YouTube(props) {
  const {
    href
  } = props;
  const contentFrame = (0, _react.useRef)();
  const [frameId] = (0, _react.useState)('youtube-' + Math.random());
  const videoId = extractVideoIdFromURL(href);
  if (videoId) {
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
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "embed-error"
    }, /*#__PURE__*/React.createElement("p", null, "Invalid YouTube URL. Cannot extract a video ID."));
  }
}