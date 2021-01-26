import Group from "../schemas/GroupSchema";
import AuthService from "../services/AuthService";
class UserController {
  async register(req, res) {
    try {
      const tokenDecode = await AuthService.tokenDecode(
        req.headers["x-access-token"]
      );
      req.body.userId = tokenDecode.id;
      const group = await Group.create(req.body);
      return res
        .status(200)
        .json({ message: "Grupo criado", group: group.name });
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Ocorreu um erro e o grupo não foi criado" });
    }
  }
}

export default new UserController();
