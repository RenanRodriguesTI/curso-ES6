"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lista =
/*#__PURE__*/
function () {
  function Lista() {
    _classCallCheck(this, Lista);

    this.data = [];
  }

  _createClass(Lista, [{
    key: "listar",
    value: function listar() {
      console.log(this.data);
    }
  }]);

  return Lista;
}();

var Container =
/*#__PURE__*/
function (_Lista) {
  _inherits(Container, _Lista);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).call(this));
  }

  _createClass(Container, [{
    key: "addData",
    value: function addData() {
      this.data.push("Sou a extensao da lista");
    }
  }]);

  return Container;
}(Lista);

var arr = [1, 23, 434, 4343, 4, 43, 43];
var arrmap = arr.map(function (item) {
  return item * 2;
});
var arrreduce = arr.reduce(function (total, next) {
  return total + next;
});
console.log(arrreduce);
var arrFilter = arr.filter(function (item) {
  return item % 2 === 0;
});
var find = arr.find(function (item) {
  return item > 4;
});
console.log(find);
/* Desestrutura~ç]ao de objeto**/

var usuario = {
  nome: "Renan ",
  idade: 10
}; // const {nome,idade} = usuario;
//REST - Desestruturação

var user = {
  nome: '',
  sobrenome: '',
  idade: ''
};

var nome = user.nome,
    idade = user.idade,
    u = _objectWithoutProperties(user, ["nome", "idade"]);

console.log("".concat(nome, " ").concat(idade, " ").concat(u)); //Spread Propagar objeto

var arr1 = [1, 3, 5, 7];
var arr2 = [2, 4, 6];
var arracomp = [].concat(arr1, arr2);
console.log(arracomp);
document.addEventListener("DOMContentLoaded", function () {
  // let container = new Container();
  // container.addData();
  // container.listar();
  console.log(arrmap);
  console.log(arr.map(function (item) {
    return {
      'number': item
    };
  }));
});
