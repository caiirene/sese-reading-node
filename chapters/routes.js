import * as dao from "./dao.js";
//let currentUser = null;
function ChapterRoutes(app) {

  //新建章 post
  const createChapter = async (req, res) => {
    const chapter = await dao.createChapter(req.body);
    res.json(chapter);
  };

  //找出一本书所有章节（参数：bookId） get
  const findAllChaptersForOneBook = async(req, res) => {
    const chaptersForOneBook = await dao.findAllChaptersForOneBook(req.params.bookId);
    res.json(chaptersForOneBook);
  };

  //找出一本书所有章节（参数：bookId）（排序版）get
  const findAllChaptersForOneBookSorted = async(req, res) => {
    const ChaptersForOneBookSorted = await dao.findAllChaptersForOneBookSorted(req.params.bookId);
    res.json(ChaptersForOneBookSorted);
  };

  //找到单章 （参数：bookId，chapterNumber）get
  const findOneChapterInABook = async(req, res) => {
    const oneChapterInABook = await dao.findOneChapterInABook(req.params.bookId, req.params.chapterNumber);
    res.json(ChaptersForOneBookSorted);
  };

  //删除单章（参数：chapterId)
  const deleteChapter = async(req, res) => {
    const status = await dao.deleteChapter(req.params.chapterId);
    res.json(status);
  };

  //修改文章（参数：chapterId)
  const updateChapterContent = async(req, res) => {
    const content = req.body.chapterContent;
    const status = await dao.updateChapterContent(req.params.chapterId, content);
    res.json(status);
  };

  //测试用函数 get
  const testChapter = async() => {
    res.send(`welcome testChapter!!!`);
  };
  app.get("/api/chapters/testChapters", testChapter);
  

  //API集合
  app.post("/api/chapters/createnewchapter", createChapter);
  app.get("/api/chapters/allchaptersinbook/:bookId", findAllChaptersForOneBook);
  app.get("/api/chapters/allchaptersinbooksorted/:bookId", findAllChaptersForOneBookSorted);
  app.get("/api/chapters/onechapterinbookwithchapternumber/:bookId/:chapterNumber", findOneChapterInABook);
  app.put("/api/chapters/updatechapter/:chapterId", updateChapterContent);
  app.delete("/api/chapters/deletechapter:chapterId", deleteChapter);
}
export default UserRoutes;