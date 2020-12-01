import { Router } from "express";
import connectionController from "../../controllers/connectionsController";
import ensureAuthenticated from "../../middlewares/ensureAuthenticated";

const connectionRouter = Router();

connectionRouter.use(ensureAuthenticated);

connectionRouter.post("/:idU", connectionController.connection);

connectionRouter.get("/", connectionController.indexConnections);

connectionRouter.get("/users", connectionController.indexUsersConnections);

connectionRouter.patch("/user1", connectionController.deleteUsersInConnections1);

connectionRouter.patch("/user2", connectionController.deleteUsersInConnections2);

export default connectionRouter;
