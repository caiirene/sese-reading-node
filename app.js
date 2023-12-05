import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";
const CONNECTION_STRING =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/book";
mongoose.connect(CONNECTION_STRING);
// check connected successfully
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to MongoDB");
  console.log(`Database name: ${db.name}`);
});

const app = express();
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000'
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 4000);
app.listen(56100, () => {
  console.log("Server is running on port 56100");
});
