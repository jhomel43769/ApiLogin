"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteuser = exports.updateuser = exports.createuser = exports.getuser = void 0;

var _db = require("../db.js");

var getuser = function getuser(req, res) {
  var users;
  return regeneratorRuntime.async(function getuser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_db.prisma.login.findMany());

        case 3:
          users = _context.sent;
          res.status(200).json(users);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(400).json({
            error: "Error al obtener los usuarios",
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getuser = getuser;

var createuser = function createuser(req, res) {
  var _req$body, email, password, username, newUser;

  return regeneratorRuntime.async(function createuser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password, username = _req$body.username;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_db.prisma.login.create({
            data: {
              email: email,
              password: password,
              username: username
            }
          }));

        case 4:
          newUser = _context2.sent;
          res.status(201).json(newUser);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            error: "error de solicitud"
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

exports.createuser = createuser;

var updateuser = function updateuser(req, res) {
  var userId, _req$body2, email, password, username, updatedUser;

  return regeneratorRuntime.async(function updateuser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          userId = req.params.id;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password, username = _req$body2.username;
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(_db.prisma.login.update({
            where: {
              id: userId
            },
            data: {
              email: email,
              password: password,
              username: username
            }
          }));

        case 5:
          updatedUser = _context3.sent;
          res.json(updatedUser);
          _context3.next = 13;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](2);
          console.error("Error updating user:", _context3.t0);
          res.status(500).json({
            error: "No se pudo actualizar los datos del usuario"
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 9]]);
};

exports.updateuser = updateuser;

var deleteuser = function deleteuser(req, res) {
  var userId;
  return regeneratorRuntime.async(function deleteuser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          userId = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_db.prisma.login["delete"]({
            where: {
              id: userId
            }
          }));

        case 4:
          res.json({
            message: "Usuario eliminado con exito"
          });
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          res.status(500)({
            error: "no se pudo eliminar el usuario"
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.deleteuser = deleteuser;