// Initialize express router
import * as dao from "./dao.js";
function BookRoutes(app) {
  const createBook = async (req, res) => {
    const book = await dao.createBook(req.body);
    res.json(book);
  };
  const deleteBook = async (req, res) => {
    const status = await dao.deleteBook(req.params.bookId);
    res.json(status);
  };
  const findAllBooks = async (req, res) => {
    const books = await dao.findAllBooks();
    res.json(books);
  };
  const findBookById = async (req, res) => {
    const book = await dao.findBookById(req.params.bookId);
    res.json(book);
  };
  const updateBook = async (req, res) => {
    const { bookId } = req.params;
    const status = await dao.updateBook(bookId, req.body);
    res.json(status);
  };

  //测试用函数 get
  const testBook = async (req, res) => {
    res.send(`welcome testBook!!!`);
  };
  app.get("/api/book/testChapters", testBook);


  const findBooksByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
      const books = await dao.findBooksByAuthor(userId);
      res.json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving books', error: error.message });
    }
  };




  app.post("/api/books", createBook);
  app.get("/api/books", findAllBooks);
  app.get("/api/books/:bookId", findBookById);
  app.put("/api/books/:bookId", updateBook);
  app.delete("/api/books/:bookId", deleteBook);
  app.get('/api/books/author/:userId', findBooksByUserId);
}
export default BookRoutes;
