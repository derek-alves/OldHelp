import { Router } from "express";
import multer from "multer";

import userController from "../../controllers/userController";
import ensureAuthenticated from "../../middlewares/ensureAuthenticated";

import updateUserAvatarService from "../../services/updateUserAvatarService";

import uploadConfig from "../../config/upload";
import UpdateUserAvatarService from "../../services/updateUserAvatarService";

const usersRouter = Router();

const upload = multer(uploadConfig);

usersRouter.get("/", ensureAuthenticated, userController.index);

usersRouter.get("/:id", ensureAuthenticated, userController.show);

usersRouter.post("/", userController.create);

usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  async (request, response) => {
    try {
      const updateUserAvatar = new UpdateUserAvatarService();

      const user = await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
);
export default usersRouter;
