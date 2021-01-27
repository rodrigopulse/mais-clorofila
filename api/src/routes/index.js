import { Router } from "express";
import AuthService from "../services/AuthService";

// Controllers
import UserController from "../controllers/UserController";
import GroupController from "../controllers/GroupController";

const routes = Router();

routes.get("/", (req, res) => {
  res.status(200).json({ helloWorld: "Bem vindo a API Mais Clorofila" });
});

//User
routes.post("/user/register", UserController.register);
routes.post("/user/login", UserController.login);
routes.delete("/user/delete/:id", AuthService.tokenAuth, UserController.delete);

//Group
routes.post("/group/create", AuthService.tokenAuth, GroupController.create);
routes.get("/group/get/:id", AuthService.tokenAuth, GroupController.getId);

export default routes;
