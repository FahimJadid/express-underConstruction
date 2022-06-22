import express from "express";

const app = express();
const port = process.env.PORT || "3000";
import web from "./routes/web.js";
import underConstruction from "./middlewares/uc-middleware.js";

// App level Middileware
app.use(underConstruction);
app.use("/about", underConstruction);

// set Engine
app.set("view engine", "ejs");
// Load routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
