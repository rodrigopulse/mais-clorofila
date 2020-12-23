import User from "../schemas/UserSchema";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
class UserController {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      return res
        .status(200)
        .json({ message: "Conta criada", user: user.email });
    } catch (err) {
      if (err.code === 11000) {
        return res
          .status(400)
          .json({ message: "E-mail já registrado", error: err.code });
      }
      return res
        .status(400)
        .json({ message: "Ocorreu um erro e a conta não foi criada" });
    }
  }

  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user.length === 0) {
        return res
          .status(401)
          .json({ mensage: "Usuário e/ou senha incorretos" });
      }
      bcrypt.compare(
        req.body.password,
        user.password || "",
        function (err, result) {
          if (result) {
            const payload = { id: user._id };
            const token = jwt.encode(payload, process.env.SECRET_JWT || "");
            return res.status(200).json({ token: token });
          } else if (err) {
            return res.status(401).json({ mensage: "Ocorreu um erro" });
          } else {
            return res
              .status(401)
              .json({ mensage: "Usuário e/ou senha incorretos" });
          }
        }
      );
    } catch (err) {
      return res
        .status(401)
        .json({ mensage: "Usuário e/ou senha incorretos", error: err });
    }
  }

  async delete(req, res) {
    try {
      const id = req.path.split("/").pop();
      const user = await User.deleteOne({ email: id });
      if (user.deletedCount >= 1) {
        return res
          .status(200)
          .json({
            message: "Usuário deletado com sucesso",
            userDeleted: user.deletedCount,
          });
      } else {
        return res.status(400).json({ message: "Usuário não encontrado" });
      }
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Usuário não deletado", error: err });
    }
  }
}

export default new UserController();
