const jwt = require("jsonwebtoken");
require('dotenv').config()

module.exports = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(500).send({ message: "Auth failed", status: false });
      } else {
        req.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Auth failed", status: false });
  }
};
