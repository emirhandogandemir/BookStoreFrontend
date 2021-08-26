import axios from "axios";

export default class PublisherService {
  add(values) {
    return axios.post("http://localhost:8080/api/publishers/add", values);
  }

  update(values) {
    return axios.post("http://localhost:8080/api/publishers/update", values);
  }

  delete(id) {
    return axios.post("http://localhost:8080/api/publishers/delete?id=" + id);
  }

  getAll() {
    return axios.get("http://localhost:8080/api/publishers/getAll");
  }
}
