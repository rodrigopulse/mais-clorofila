import Fertilizer from "../schemas/FertilizerSchema";
// import AuthService from "../services/AuthService";

class FertilizerController {
  async create(req, res) {
    try {
      const fertilizer = await Fertilizer.create(req.body);
      return res
        .status(200)
        .json({ message: "Fertilizante Adicionado", date: fertilizer.date });
    } catch (err) {}
  }
  async getGroupId(req, res) {
    try {
      const groupId = req.path.split("/").pop();
      const fertilizer = await Fertilizer.find({ groupId: groupId });
      res.status(200).json({ data: fertilizer });
    } catch (err) {}
  }
}

export default new FertilizerController();
