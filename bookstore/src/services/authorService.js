import axios from "axios";

export default class AuthorService {
  add(values) {
    return axios.post("http://localhost:8080/api/authors/add", values);
  }

  update(values) {
    return axios.post("http://localhost:8080/api/authors/update", values);
  }

  delete(id) {
    return axios.post("http://localhost:8080/api/authors/delete?id=" + id);
  }

  getById(authorId) {}

  getAll() {
    return axios.get("http://localhost:8080/api/authors/getAll");
  }
}
