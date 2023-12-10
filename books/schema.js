import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true
    },
    introduction: {
      type: String,
    },
    coverImage: {
      type: String // Storing Base64 image data as a string
      // If cover images are not mandatory, you can remove 'required: true'
    }
  },
  {
    collection: "books",
    timestamps: true // Optionally add timestamps to track creation and update times
  }
);

//export const Book = mongoose.model('Book', bookSchema);
export default bookSchema;
