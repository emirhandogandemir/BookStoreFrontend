import axios from "axios";

export default class CategoryService {
  add(values) {
    return axios.post("http://localhost:8080/api/categories/add", values);
  }
  update(values) {
    return axios.post("http://localhost:8080/api/categories/update", values);
  }
  delete(id) {
    return axios.post("http://localhost:8080/api/categories/delete?id=" + id);
  }
  getById(id) {
    return axios.get("http://localhost:8080/api/categories/getById?id=" + id);
  }

  getByName(name) {
    return axios.get(
      "http://localhost:8080/api/categories/getByName?name=" + name
    );
  }

  getAll() {
    return axios.get("http://localhost:8080/api/categories/getAll");
  }
}
