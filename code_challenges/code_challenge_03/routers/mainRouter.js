import express from "express";
import { home, login, photos, profile } from "../controllers/mainController";

import routes from "../routes";

const mainRouter = express.Router();

mainRouter.get(routes.home, home);
mainRouter.get(routes.login, login);
mainRouter.get(routes.photos, photos);
mainRouter.get(routes.profile, profile);

export default mainRouter;
