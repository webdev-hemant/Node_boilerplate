const { Router } = require("express");
const { getAllContacts } = require("../controllers/contactCntr");
const validateToken = require("../middlerwares/validateToken");
const contactRouter = Router();

// middleware
contactRouter.use(validateToken);

// routes
contactRouter.get("/", getAllContacts);

module.exports = contactRouter;
