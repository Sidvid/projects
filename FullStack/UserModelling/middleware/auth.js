const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = function (request, response, next) {
  const token = request.header("x-auth-token");

  if (!token) {
    return response.status(400).json({ message: "No token found" });
  }
  try {
    const decode = jwt.verify(token, config.get("jwtToken"));
    request.user = decode.user;
    next();
  } catch (error) {
    response.status(401).json({ message: "Token is not valid" });
  }
};
