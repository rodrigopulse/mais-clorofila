import { Router } from "express";

// Controllers
import UserController from "../controllers/UserController";
import GroupController from "../controllers/GroupController";

const routes = Router();

routes.get("/", (req, res) => {
  res.status(200).json({ helloWorld: "Welcome to Mais Clorofila" });
});

//User
routes.post("/user/register", UserController.register);
routes.post("/user/login", UserController.login);
routes.delete("/user/delete/:id", UserController.delete);

//Group
routes.post("/group/register", GroupController.register);

export default routes;
