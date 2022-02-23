"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("./../../client"));

var _default = {
  Query: {
    seeCategories: function seeCategories(_, _ref) {
      var page = _ref.page;
      return _client["default"].category.findMany({
        take: 5,
        skip: (page - 1) * 5
      });
    }
  }
};
exports["default"] = _default;