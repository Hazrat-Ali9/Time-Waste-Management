const bcrypt = require("bcrypt");
// bcypt
exports.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

exports.comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};