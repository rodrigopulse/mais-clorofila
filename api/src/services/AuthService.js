import jwt from "jwt-simple";
import dotenv from "dotenv";
import User from "../schemas/UserSchema";

dotenv.config();

class AuthService {
  async tokenAuth(req, res, next) {
    try {
      const token = req.headers["x-access-token"];
      if (token === undefined) {
        return res.status(401).json({ mensagem: "Token não encontrado" });
      }
      const decoded = await jwt.decode(
        token.toString(),
        process.env.SECRET_JWT || ""
      );
      if (decoded) {
        next();
      }
    } catch (err) {
      return res.status(401).json({ mensagem: "Token invalido" });
    }
  }

  async tokenDecode(token) {
    try {
      const jwtDecode = await jwt.decode(
        token.toString(),
        process.env.SECRET_JWT || ""
      );
      return jwtDecode;
    } catch (err) {
      return err;
    }
  }
}
export default new AuthService();
