import axios from "axios";

export default class BookService {
  add(values) {
    return axios.post("http://localhost:8080/api/books/add", values);
  }
  update(values) {
    return axios.post("http://localhost:8080/api/books/update", values);
  }
  delete(id) {
    return axios.post("http://localhost:8080/api/books/delete?id=" + id);
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/books/getById?id=" + id);
  }
  getAll() {
    return axios.get("http://localhost:8080/api/books/getAll");
  }
  getByCategoryId(categoryId) {
    return axios.get(
      "http://localhost:8080/api/books/getByCategoryId?categoryId=" + categoryId
    );
  }
  countGetAll() {
    return axios.get("http://localhost:8080/api/books/countGetAll");
  }

  addToCardBook(cardId, bookId) {
    return axios.post(
      `http://localhost:8080/api/books/book/${cardId}/${bookId}`
    );
  }
}
