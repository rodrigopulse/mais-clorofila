import Group from "../schemas/GroupSchema";

class UserController {
  async register(req, res) {
    try {
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
