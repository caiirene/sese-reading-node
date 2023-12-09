import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    chapterName: { type: String, required: true },
    chapterNumber: { type: int, required: true },
    chapterPreview: String,
    uploadDate: Date,
    click: int,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    bookInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
    }
  },
  {
    collection: "chapters",
  }
);

export default schema;