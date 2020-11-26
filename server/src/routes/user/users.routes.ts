import { Router } from "express";
import multer from "multer";

import userController from "../../controllers/userController";
import ensureAuthenticated from "../../middlewares/ensureAuthenticated";


import uploadConfig from "../../config/upload";
import UpdateUserAvatarService from "../../services/updateUserAvatarService";

const usersRouter = Router();

const upload = multer(uploadConfig);

usersRouter.get("/", ensureAuthenticated, userController.index);

usersRouter.get("/show", ensureAuthenticated, userController.show);

usersRouter.post("/", userController.create);


usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  upload.single("avatar"),
  async (request, response) => {
    try {
      const updateUserAvatar = new UpdateUserAvatarService();

       await updateUserAvatar.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });
      return response.json({message:"Upload image sucesse"});
    } catch (err) {
       throw err;
    }
  }
);
export default usersRouter;
