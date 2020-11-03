import { Router } from "express";

import usersRouter from "./user/users.routes";
import sessionsRouter from './sessions/sessions.routes';
import servicesRouter from "./service/service.routes";

const routes = Router();

routes.use("/user", usersRouter);
routes.use("/sessions",sessionsRouter);
routes.use("/service",servicesRouter)
export default routes;