import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    collection: "books",
  }
);

export default bookSchema;
