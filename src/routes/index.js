const newsRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  // Routes views
  app.use("/news", newsRouter);

  // Routes site: home, search, contact...
  // Should be at the end of the list of routes
  app.use("/", siteRouter);
}

module.exports = route;
