import express from "express";
import path from "path";

import routes from "./routes";
import mainRouter from "./routers/mainRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(localsMiddleware);
app.use(routes.home, mainRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
