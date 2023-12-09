import chapterModel from "./model.js";

/**
 * 首先：这是对数据库的操作步骤，不包含其他逻辑
 * 
 * 这里包含以下函数
 * createChapter 新建章节，该章节内必须有bookInfo
 * findAllChaptersForOneBook 找到一本书的所有章节
 * findAllChaptersForOneBookSorted 全部章节排序版
 * findOneChapterInABook 找到特定书的特定章节
 */

//创建新章节
export const createChapter = (newChapter) => chapterModel.create(newChapter);

//找到一本书全部章节
export const findAllChaptersForOneBook = (bookId) => model.find({ bookInfo: bookId });

//全部章节排序版
export const findAllChaptersForOneBookSorted = (bookId) => {
  return model.find({ bookInfo: bookId }).sort({ chapterNumber: 1 });
};

//找到单章
export const findOneChapterInABook = (bookId, chapterNumber) => 
    model.findOne({ bookInfo: bookId, chapterNumber: chapterNumber });

//删除单张
export const deleteChapter = (userId) => model.deleteOne({ _id: userId });

//搜索句子，返回数据库内所有包含句子的章节
export const findChaptersByContent = (searchString) => {
  return model.find({ chapterContent: new RegExp(searchString, 'i') });
};

//搜索句子，返回数据库内所有包含句子的书
export const findBooksByChapterContent = (searchString) => {
  return model.aggregate([
    { $match: { chapterContent: new RegExp(searchString, 'i') } },
    { $group: { _id: "$bookInfo" } },
    { $project: { _id: 0, bookId: "$_id" } }
  ]);
};

//修改单章，只接收id和文章内容作为参数
export const updateChapterContent = (chapterId, newContent) => {
  return model.updateOne({ _id: chapterId }, { $set: { chapterContent: newContent } });
};

