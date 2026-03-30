import "dotenv/config";
import express from "express";
import passport from "./config/passport.js";
import connectDB from "./config/connection.js";

import userRoutes from "./routes/userRoutes.js";
import bookmarkRoutes from "./routes/bookmarkRoutes.js";

connectDB();

const app = express();

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(passport.initialize());

app.use("/api/users", userRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

app.listen(process.env.PORT || 3030, () =>
  console.log("Server running on port: https:localhost:" + port),
);
