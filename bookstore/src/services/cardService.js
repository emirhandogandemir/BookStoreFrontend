import axios from "axios";

export default class CardService {
  add(values) {
    return axios.post("http://localhost:8080/api/carts/add", values);
  }

  update(values) {
    return axios.post("http://localhost:8080/api/carts/update", values);
  }

  getByUserId(userId) {
    return axios.get(
      "http://localhost:8080/api/carts/getByUserId?userId=" + userId
    );
  }
}
