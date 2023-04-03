const express = require("express");
const contactRouter = require("./routes/contactRoutes");
const connectDb = require("./config/dbConnection");
require("dotenv").config({});
const app = express();
const port = process.env.PORT;

// db connection
// connectDb();

// express middlewares
app.use(express.json());

// routes middlewares
app.use("/api/contact", contactRouter);

app.get("/", (req, res) => {
  res.json({ message: "hellow world" });
});

app.listen(port, () => console.log(`server started on port ${port}`));
