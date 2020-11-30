import { Router } from "express";
import connectionController from "../../controllers/connectionsController";
import ensureAuthenticated from "../../middlewares/ensureAuthenticated";

const connectionRouter = Router();

connectionRouter.use(ensureAuthenticated);

connectionRouter.post("/:idU", connectionController.connection);

connectionRouter.get("/", connectionController.indexConnections);

connectionRouter.get("/users", connectionController.indexUsersConnections);

connectionRouter.put("/userss", connectionController.deleteUsersInConnections);

export default connectionRouter;
