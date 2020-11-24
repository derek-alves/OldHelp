import { Router } from "express";

import usersRouter from "./user/users.routes";
import sessionsRouter from './sessions/sessions.routes';
import servicesRouter from "./service/service.routes";
import connectionRouter from './service/connection.routes';

const routes = Router();

routes.use("/user", usersRouter);
routes.use("/sessions",sessionsRouter);
routes.use("/service",servicesRouter)
routes.use("/connection", connectionRouter)

export default routes;