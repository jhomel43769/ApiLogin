"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _loginController = require("../controllers/login.controller.js");

var router = (0, _express.Router)();
router.get("/getUsers", _loginController.getuser);
router.post("/login", _loginController.createuser);
router.put("/login/:id", _loginController.updateuser);
router["delete"]("/login/:id", _loginController.deleteuser);
var _default = router;
exports["default"] = _default;