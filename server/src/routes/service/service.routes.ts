import { Router } from "express";
import servicesController from "../../controllers/serviceController";
import ensureAuthenticated from '../../middlewares/ensureAuthenticated';

const servicesRouter = Router();

servicesRouter.use(ensureAuthenticated);

servicesRouter.get("/", servicesController.index);

servicesRouter.get("/:id", servicesController.show);

servicesRouter.post("/", servicesController.create);

export default servicesRouter;
