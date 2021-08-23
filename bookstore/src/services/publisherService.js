import axios from "axios";

export default class PublisherService {
  add() {}

  update() {}

  delete() {}

  getAll() {
    return axios.get("http://localhost:8080/api/publishers/getAll");
  }
}
