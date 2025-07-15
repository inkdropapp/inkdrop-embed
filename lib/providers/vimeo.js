"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Vimeo;
exports.test = test;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const BASE_URL_REGEX = /https:\/\/(www\.|)vimeo.com\//;
const EMBED_PROVIDER_URL = 'https://player.vimeo.com/video/';
function test(url) {
  return url.match(BASE_URL_REGEX);
}
function Vimeo(props) {
  const {
    href
  } = props;
  const contentFrame = (0, _react.useRef)();
  const [frameId] = (0, _react.useState)('vimeo-' + Math.random());
  const splitUrl = href.split('/');
  const videoId = splitUrl[splitUrl.length - 1];
  const url = `${EMBED_PROVIDER_URL}${videoId}?transparent=0`;
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