import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.mainTitle = "Title from middle";
  res.locals.routes = routes;
  next();
};
