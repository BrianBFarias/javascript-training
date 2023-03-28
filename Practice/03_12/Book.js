/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */
class Book {
  Constructor(title, pages, author) {
    this.author = author;
    this.pages = pages;
    this.title = title;
    this.CP = 0;
  }
  ChangeCP(CP) {
    this.CP = CP;
  }
}

export default Book;
