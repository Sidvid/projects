import jsonwebtoken from "jsonwebtoken";
let {verify} = jsonwebtoken

export const verifyToken = (request, response, next) => {
  let token = request.headers["x-access-token"];
  if (!token) {
    return response
      .status(401)
      .json({ message: "Token not found", success: false });
  }
  try {
    verify(token, process.env.TOKEN_KEY, (error, decode) => {
      if (error) {
        response.status(401).json({
          message: "Invalid token found",
          success: false,
        });
        return;
      }
      request.auths = decode;
    });
    next();
  } catch (error) {
    response.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};
