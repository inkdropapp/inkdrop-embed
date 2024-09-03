"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLocal = void 0;
const isLocal = exports.isLocal = location.protocol === 'file:';