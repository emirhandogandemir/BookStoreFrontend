import axios from "axios";

export default class AuthorService {
  add() {}

  update() {}

  delete() {}

  getById(authorId) {}

  getAll() {
    return axios.get("http://localhost:8080/api/authors/getAll");
  }
}
