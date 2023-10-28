const jwt = require("jsonwebtoken");
const verification = (req, res, next) => {
  const token = req.body.token;
  if (!token) {
    return res.status(202).json({
      status: false,
      message: " token not found",
    });
  }

  jwt.verify(token, "secretKey", (err, decodedMessage) => {
    if (err) {
      return res.status(202).json({
        status: false,
        message: " authenication failed",
      });
    } else {
      next();
    }
  });
};

module.exports = { verification };
