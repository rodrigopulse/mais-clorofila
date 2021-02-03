import Fertilizer from "../schemas/FertilizerSchema";
import Group from "../schemas/GroupSchema";
// import AuthService from "../services/AuthService";

class FertilizerController {
  async create(req, res) {
    try {
      const group = await Group.updateOne(
        { _id: req.body.groupId },
        {
          dateLastFertilization: req.body.date,
          nameLastFertinization: req.body.name,
        }
      );
      const fertilizer = await Fertilizer.create(req.body);
      return res.status(200).json({
        message: "Fertilizante Adicionado",
        date: fertilizer.date,
        group: group._id,
      });
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Ocorreu um erro e o grupo não foi criado" });
    }
  }
  async getGroupId(req, res) {
    try {
      const groupId = req.path.split("/").pop();
      const fertilizer = await Fertilizer.find({ groupId: groupId });
      res.status(200).json({ data: fertilizer });
    } catch (err) {
      return res
        .status(400)
        .json({ message: "Ocorreu um erro e o grupo não foi criado" });
    }
  }
}

export default new FertilizerController();
