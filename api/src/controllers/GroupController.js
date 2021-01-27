import Group from "../schemas/GroupSchema";
import AuthService from "../services/AuthService";
class UserController {
  async create(req, res) {
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
  async getId(req, res) {
    try {
      const id = req.path.split("/").pop();
      const tokenDecode = await AuthService.tokenDecode(
        req.headers["x-access-token"]
      );
      const group = await Group.findOne({ _id: id });
      if (group.userId.toString() !== tokenDecode.id) {
        return res
          .status(401)
          .json({ message: "Você não é o criador desse grupo" });
      }
      return res.status(200).json({ data: group });
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Ocorreu um erro ao abrir o grupo" });
    }
  }
  async getAllUserId(req, res) {
    try {
      const tokenDecode = await AuthService.tokenDecode(
        req.headers["x-access-token"]
      );
      const groups = await Group.find({ userId: tokenDecode.id });
      return res.status(200).json({ data: groups });
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Ocorreu um erro ao buscar os grupos" });
    }
  }
}

export default new UserController();
