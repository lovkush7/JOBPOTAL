import jwt from "jsonwebtoken";
import Envconfig from "../config/Envconfig.ts";
import User from "../entity/user.entities.ts";

export async function expressAuthentication(
  request: any,
  securityName: string
) {
  if (securityName === "jwt") {
    try {
      let token: string | undefined;

      // cookie बाट
      if (request.cookies?.jwt) {
        token = request.cookies.jwt;
      }

      // header बाट
      else if (
        request.headers?.authorization &&
        request.headers.authorization.startsWith("Bearer ")
      ) {
        token = request.headers.authorization.split(" ")[1];
      }

      console.log("token:", token);

      if (!token) {
        throw new Error("Unauthorized");
      }

      const decoded: any = jwt.verify(token, Envconfig.JWT_SECRET!);

      console.log("decoded:", decoded);

      const user = await User.findOne({
        where: { id: decoded.id },
      });

      if (!user) {
        throw new Error("Unauthorized");
      }

      request.user = user;

      return user;
    } catch (err) {
      console.log("Auth error:", err);
      throw new Error("Unauthorized");
    }
  }
}