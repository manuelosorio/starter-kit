(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],2:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],3:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],4:[function(require,module,exports){
"use strict";

var _example = require("./modules/example");

var example = new _example.Example();
var exObject = {
  firstName: '',
  lastName: '',
  age: 0
};
example.helloWorld();
exObject.firstName = "Manuel";
exObject.lastName = "Osorio";
exObject.age = 23;
example.test('Hello', 1, exObject);

},{"./modules/example":5}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Example = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Example = /*#__PURE__*/function () {
  function Example() {
    (0, _classCallCheck2["default"])(this, Example);
  }

  (0, _createClass2["default"])(Example, [{
    key: "helloWorld",
    value: function helloWorld() {
      console.log('Hello World.');
    }
  }, {
    key: "test",
    value: function test(arg, num, obj) {
      console.log('Arg: %s Num: %s', arg, num);
      console.info(obj);
    }
  }]);
  return Example;
}();

exports.Example = Example;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwic3JjL2Fzc2V0cy9zY3JpcHRzL21haW4udHMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNOQTs7QUFHQSxJQUFNLE9BQU8sR0FBRyxJQUFJLGdCQUFKLEVBQWhCO0FBQ0EsSUFBTSxRQUFRLEdBQVc7QUFDdkIsRUFBQSxTQUFTLEVBQUUsRUFEWTtBQUV2QixFQUFBLFFBQVEsRUFBRSxFQUZhO0FBR3ZCLEVBQUEsR0FBRyxFQUFFO0FBSGtCLENBQXpCO0FBS0EsT0FBTyxDQUFDLFVBQVI7QUFDQSxRQUFRLENBQUMsU0FBVCxHQUFxQixRQUFyQjtBQUNBLFFBQVEsQ0FBQyxRQUFULEdBQW9CLFFBQXBCO0FBQ0EsUUFBUSxDQUFDLEdBQVQsR0FBZSxFQUFmO0FBQ0EsT0FBTyxDQUFDLElBQVIsQ0FBYSxPQUFiLEVBQXNCLENBQXRCLEVBQXlCLFFBQXpCOzs7Ozs7Ozs7Ozs7Ozs7O0lDWGEsTztBQUNYLHFCQUFBO0FBQUE7QUFDQzs7OztpQ0FDUztBQUNSLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0Q7Ozt5QkFDSSxHLEVBQWEsRyxFQUFhLEcsRUFBVztBQUN4QyxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksaUJBQVosRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEM7QUFDQSxNQUFBLE9BQU8sQ0FBQyxJQUFSLENBQWEsR0FBYjtBQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCB7IEV4YW1wbGUgfSBmcm9tIFwiLi9tb2R1bGVzL2V4YW1wbGVcIjtcclxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4vbW9kZWxzL3BlcnNvblwiO1xyXG5cclxuY29uc3QgZXhhbXBsZSA9IG5ldyBFeGFtcGxlKCk7XHJcbmNvbnN0IGV4T2JqZWN0OiBQZXJzb24gPSB7XHJcbiAgZmlyc3ROYW1lOiAnJyxcclxuICBsYXN0TmFtZTogJycsXHJcbiAgYWdlOiAwXHJcbn07XHJcbmV4YW1wbGUuaGVsbG9Xb3JsZCgpO1xyXG5leE9iamVjdC5maXJzdE5hbWUgPSBcIk1hbnVlbFwiXHJcbmV4T2JqZWN0Lmxhc3ROYW1lID0gXCJPc29yaW9cIjtcclxuZXhPYmplY3QuYWdlID0gMjM7XHJcbmV4YW1wbGUudGVzdCgnSGVsbG8nLCAxLCBleE9iamVjdClcclxuIiwiaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4uL21vZGVscy9wZXJzb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeGFtcGxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcbiAgaGVsbG9Xb3JsZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZC4nKVxyXG4gIH1cclxuICB0ZXN0KGFyZzogc3RyaW5nLCBudW06IE51bWJlciwgb2JqOiBQZXJzb24pIHtcclxuICAgIGNvbnNvbGUubG9nKCdBcmc6ICVzIE51bTogJXMnLCBhcmcsIG51bSk7XHJcbiAgICBjb25zb2xlLmluZm8ob2JqKTtcclxuICB9XHJcbn1cclxuIl19
