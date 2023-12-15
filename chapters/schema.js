import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    chapterName: { type: String, required: true },
    chapterNumber: Number,
    chapterPreview: String,
    uploadDate: Date,
    click: Number,
    chapterContent: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    bookInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
        required: true,
    }
  },
  {
    collection: "chapters",
  }
);

export default schema;