import { Router } from "express";
import userController from "../../controllers/userController";

const usersRouter = Router();

usersRouter.get("/", userController.index);

usersRouter.get("/:id", userController.show);

usersRouter.post("/", userController.create);

export default usersRouter;
