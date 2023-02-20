import jsonwebtoken from "jsonwebtoken";
let { verify } = jsonwebtoken;
export const verifyToken = async (request, response, next) => {
    console.log("request header", request.headers["x-access-token"]);
  try {
    let token = request.headers["x-access-token"];
    if (!token) {
      response.status(400).json({
        message: "Token not present",
        success: false,
      });
      return;
    }
     verify(token,process.env.SECRET_KEY, (error, decode) => {
      if (error) {
        response
          .status(401)
          .json({ message: "Invalid token !", success: false });
        return;
      }
      console.log("DCODE", decode);
      request.token = decode;
      next();
    });
  } catch (error) {
    console.log("Error in verifytoken" , error);
    response
      .status(500)
      .json({ message: "Something wrong occured", success: false });
  }
};
