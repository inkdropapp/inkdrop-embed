"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Chesscom;
exports.test = test;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const BASE_URL = 'https://chess.com/';
const EMBED_PROVIDER_URL = 'https://chess.com/emboard';

/* Example:

<iframe id="<ID>" allowtransparency="true" frameborder="0" style="width:100%;border:none;" src="https://www.chess.com/emboard?id=<ID>"></iframe>
<script nonce="chesscom-diagram">window.addEventListener("message",e=>{e['data']&&"<ID>"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+37}px`)});</script>

*/

function test(url) {
  return url.startsWith(BASE_URL);
}
function Chesscom(props) {
  const {
    href
  } = props;
  const contentFrame = (0, _react.useRef)();
  const [frameId] = (0, _react.useState)('chesscom-' + Math.random());
  const query = new URLSearchParams(href.split('?')[1]);
  const chesscomId = query.get('id');
  const url = `${EMBED_PROVIDER_URL}?id=${chesscomId}`;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("iframe", {
    allowtransparency: "true",
    frameborder: "0",
    style: "width:100%;border:none;",
    id: chesscomId,
    frameId: frameId,
    className: "embed-frame",
    ref: contentFrame,
    src: url
  }), /*#__PURE__*/React.createElement("script", {
    nonce: "chesscom-diagram"
  }, "window.addEventListener(\"message\", function(e)", e['data'] && chesscomId === e['data']['id'] && document.getElementById(`${e['data']['id']}`) && (document.getElementById(`${e['data']['id']}`).style.height = `${e['data']['frameHeight'] + 37}px`), ");"));
}