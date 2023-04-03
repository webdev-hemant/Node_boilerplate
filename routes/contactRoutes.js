const { Router } = require("express");
const contactRouter = Router();

contactRouter.get("/", (req, res) => {
  res.json({ message: "this is contact router" });
});

module.exports = contactRouter;
