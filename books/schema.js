import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", },
  },
  {
    collection: "books",
  }
);


export default bookSchema;
