import { fil } from "date-fns/locale";
import multer from "multer";
import crypto from "crypto";
import path from "path";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp")
export default {
  directory:tmpFolder,
  storage: multer.diskStorage({
    destination:tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const { id } = request.user;
      const fileName = `${id}-${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
