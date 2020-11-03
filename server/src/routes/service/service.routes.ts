import { Router } from "express";
import servicesController from "../../controllers/serviceController";

const servicesRouter = Router();

servicesRouter.get("/", servicesController.index);

servicesRouter.get("/:id", servicesController.show);

servicesRouter.post("/:id", servicesController.create);

export default servicesRouter;
