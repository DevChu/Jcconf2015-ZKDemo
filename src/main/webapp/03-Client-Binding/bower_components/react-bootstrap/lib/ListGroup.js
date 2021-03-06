define(['exports', 'module', 'react', 'classnames', './utils/ValidComponentChildren'], function (exports, module, _react, _classnames, _utilsValidComponentChildren) {
  'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var _React = _interopRequireDefault(_react);

  var _classNames = _interopRequireDefault(_classnames);

  var _ValidComponentChildren = _interopRequireDefault(_utilsValidComponentChildren);

  console.warn('This file is deprecated, and will be removed in v0.24.0. Use react-bootstrap.js or react-bootstrap.min.js instead.');
  console.warn('You can read more about it at https://github.com/react-bootstrap/react-bootstrap/issues/693');

  var ListGroup = (function (_React$Component) {
    function ListGroup() {
      _classCallCheck(this, ListGroup);

      _get(Object.getPrototypeOf(ListGroup.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(ListGroup, _React$Component);

    _createClass(ListGroup, [{
      key: 'render',
      value: function render() {
        var _this = this;

        var items = _ValidComponentChildren['default'].map(this.props.children, function (item, index) {
          return (0, _react.cloneElement)(item, { key: item.key ? item.key : index });
        });

        var childrenAnchors = false;

        if (!this.props.children) {
          return this.renderDiv(items);
        } else if (_React['default'].Children.count(this.props.children) === 1 && !Array.isArray(this.props.children)) {
          var child = this.props.children;

          childrenAnchors = this.isAnchor(child.props);
        } else {

          childrenAnchors = Array.prototype.some.call(this.props.children, function (child) {
            return !Array.isArray(child) ? _this.isAnchor(child.props) : Array.prototype.some.call(child, function (subChild) {
              return _this.isAnchor(subChild.props);
            });
          });
        }

        if (childrenAnchors) {
          return this.renderDiv(items);
        } else {
          return this.renderUL(items);
        }
      }
    }, {
      key: 'isAnchor',
      value: function isAnchor(props) {
        return props.href || props.onClick;
      }
    }, {
      key: 'renderUL',
      value: function renderUL(items) {
        var listItems = _ValidComponentChildren['default'].map(items, function (item, index) {
          return (0, _react.cloneElement)(item, { listItem: true });
        });

        return _React['default'].createElement(
          'ul',
          _extends({}, this.props, {
            className: (0, _classNames['default'])(this.props.className, 'list-group') }),
          listItems
        );
      }
    }, {
      key: 'renderDiv',
      value: function renderDiv(items) {
        return _React['default'].createElement(
          'div',
          _extends({}, this.props, {
            className: (0, _classNames['default'])(this.props.className, 'list-group') }),
          items
        );
      }
    }]);

    return ListGroup;
  })(_React['default'].Component);

  ListGroup.propTypes = {
    className: _React['default'].PropTypes.string,
    id: _React['default'].PropTypes.string
  };

  module.exports = ListGroup;
});