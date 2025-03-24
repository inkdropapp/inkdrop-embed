"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Lichess;
exports.test = test;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BASE_URL = 'https://lichess.org/';
const EMBED_PROVIDER_URL = 'https://lichess.org/embed/game/';

/* Example:

<iframe src="https://lichess.org/embed/game/<ID>?theme=auto&bg=auto"
width=600 height=397 frameborder=0></iframe>

*/

function test(url) {
  return url.startsWith(BASE_URL);
}
function Lichess(props) {
  const {
    href
  } = props;
  const contentFrame = (0, _react.useRef)();
  const [frameId] = (0, _react.useState)('lichess-' + Math.random());
  const urlObj = new URL(href);
  const lichessId = urlObj.pathname.split('/').pop();
  const url = `${EMBED_PROVIDER_URL}${lichessId}?theme=auto&bg=auto`;
  return /*#__PURE__*/React.createElement("iframe", {
    src: url,
    id: frameId,
    className: "embed-frame",
    ref: contentFrame,
    width: "600",
    height: "397",
    frameborder: "0"
  });
}