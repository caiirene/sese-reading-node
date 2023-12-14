import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    description: {
      type: String,
      required: true
    },
    coverImage: {
      type: String,
      required: true // Since you have a cover image URL in your document, mark this as required
    },
    pubDate: {
      type: Date,
      required: true
    },
    authorName: {
      type: String,
      required: true
    }
  },
  {
    collection: "books",
    timestamps: true // Optionally add timestamps to track creation and update times
  }
);

export default bookSchema;

