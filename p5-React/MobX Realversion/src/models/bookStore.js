

//DataStore for this Demo
import {observable, useStrict, action} from "mobx"
useStrict(true);
class BookStore {


@observable _books = [];


  constructor() {
    
    this.fetchBooks();
  }


  get books() {
    return this._books;
  }

  @action
  newBook(title, info, moreInfo){
    let book = { "id": this._books.length + 1, "title": title, "info": info, "moreInfo": moreInfo}
    this.addBook(book);
  }

  @action
  changeBooks(books){
    this._books.replace(books)
  }

  @action
  changebooks(id){
    this._books.replace(id)
  }

  @action
  addBook(book){
    this._books.push(book);
  }

  @action
  deleteBook(book_id){
    this._books.splice(this._books.findIndex((book) => {return book.id === book_id}), 1)
  }

  getBook(id) {
    return this._books.filter((book) => {
      return book.id === Number(id);
    })[0];
  }

  fetchBooks = ()=> {
    fetch("http://localhost:7777/books")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.changeBooks(response);
        console.log("Got books from server");
      })
  }
}

let store = new BookStore();

window.store = store;

export default store;
