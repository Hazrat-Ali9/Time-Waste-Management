const jwt = require("jsonwebtoken");

exports.sign = (payload, secret, options) => {
  return jwt.sign(payload, secret, options);
};

exports.verify = (token, secret, callback) => {
  jwt.verify(token, secret, callback);
};

exports.decode = (token, secret) => {
  return jwt.decode(token, secret);
};