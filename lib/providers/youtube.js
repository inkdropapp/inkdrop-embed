"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;
exports.default = YouTube;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const BASE_URL = 'https://www.youtube.com/';
const EMBED_PROVIDER_URL = 'https://www.youtube.com/embed/';

function test(url) {
  return url.startsWith(BASE_URL);
}

function YouTube(props) {
  const {
    href
  } = props;
  const contentFrame = (0, React.useRef)();
  const [frameId] = (0, React.useState)('youtube-' + Math.random());
  const query = new URLSearchParams(href.split('?')[1]);
  const videoId = query.get('v');
  const url = `${EMBED_PROVIDER_URL}${videoId}`;
  return React.createElement("iframe", {
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

YouTube.prototype.propTypes = {
  href: _propTypes.default.string
};