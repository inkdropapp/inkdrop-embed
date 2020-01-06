"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;
exports.default = Gist;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const BASE_URL = 'https://gist.github.com/';

function test(url) {
  return url.startsWith(BASE_URL);
}

function Gist(props) {
  const {
    href
  } = props;
  const contentFrame = (0, React.useRef)();
  const [frameId] = (0, React.useState)('gist-' + Math.random());
  (0, React.useEffect)(() => {
    const {
      current: frame
    } = contentFrame;

    if (frame && frame.contentDocument) {
      const html = `
        <html><body onload="window.parent.postMessage({message: 'embed:adjust-iframe-size', id: '${frameId}', height: document.body.scrollHeight});">
        <script type="text/javascript" src="${href}.js"></script>
        <script>
        document.addEventListener('click', function (event) {
          if (event.target.tagName === 'A') {
            event.preventDefault();
            window.parent.postMessage({ message: 'embed:open-external', uri: event.target.href })
          }
        }, false);
        </script>
        </body></html>
      `;
      frame.contentDocument.writeln(html);
      frame.contentDocument.close();
    }
  }, [href]);
  return React.createElement("iframe", {
    id: frameId,
    className: "embed-frame",
    ref: contentFrame
  });
}

Gist.prototype.propTypes = {
  href: _propTypes.default.string
};