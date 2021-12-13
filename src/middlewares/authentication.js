const jwt = require("jsonwebtoken");
require("dotenv").config();
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_ACCESS_KEY, function (err, token) {
      if (err) return reject(err);
      return resolve(token);
    });
  });
};

module.exports = async (req, res, next) => {
  const bearertoken = req?.headers?.authorisation;
  if (!breaertoken || !breaertoken.startsWith("Bearer"))
    return res.status(400).json({
      status: "Failed",
      message: "Please provide correct valid token",
    });
  const token = breaertoken.split(" ")[1];

  let user;
  try {
    user = await verifyToken(token);
  } catch (e) {
    return res.status(400).json({
      status: "Failed",
      message: "Please provide correct valid token",
    });
  }
  if (!user)
    return res.status(400).json({
      status: "Failed",
      message: "Please provide correct valid token",
    });
  req.user = user;
  return next();
};
