import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users', // Reference to the 'User' collection
    },
    author: { type: String },
  },
  {
    collection: "books",
  }
);


export default bookSchema;
