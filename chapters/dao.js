import chapterModel from "./model.js";

export const createChapter = (chapter) => chapterModel.create(chapter);

export const findAllChaptersForOneBook = (bookId) => model.find({ bookInfo: bookId });

export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>
  model.findOne({ username, password });
export const findUsersByRole = (role) => model.find({ role: role });
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });