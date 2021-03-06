import { Router } from "express";
import AuthenticateUSerService from "../../services/authenticateUserService";

const sessionsRouter = Router();

sessionsRouter.post("/", async (request, response) => {
  try {
    
    const { email, password } = request.body;
  
    const authenticateUser = new AuthenticateUSerService();

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user, token });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionsRouter;
