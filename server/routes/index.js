const express = require("express");
const router = express.Router();
const contentRoute = require("./content.route");

const routesIndex = [
  {
    path: "/content",
    route: contentRoute,
  },
];

routesIndex.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
