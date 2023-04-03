const { Router } = require("express");
const { getAllContacts } = require("../controllers/contactCntr");
const contactRouter = Router();

contactRouter.get("/", getAllContacts);

module.exports = contactRouter;
