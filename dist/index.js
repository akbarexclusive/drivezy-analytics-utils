'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _drivezyAnalytics = require('./drivezyAnalytics.utils');

Object.keys(_drivezyAnalytics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _drivezyAnalytics[key];
    }
  });
});