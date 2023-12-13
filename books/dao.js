import model from "./model.js";

export const createBook = (book) => model.create(book);
export const findAllBooks = () => model.find();
export const findBookById = (bookId) => model.findById(bookId);
export const updateBook = (bookId, book) =>
  model.updateOne({ _id: bookId }, { $set: book });
export const deleteBook = (bookId) => model.deleteOne({ _id: bookId });

export const findBooksByAuthor = (authorId) => model.findOne({ authorId: authorId });