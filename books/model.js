import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("books", schema);
export default model;