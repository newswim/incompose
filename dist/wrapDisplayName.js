'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getDisplayName = require('./getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
}; /**
    * @author recompose (https://github.com/acdlite/recompose)
    */

exports.default = wrapDisplayName;