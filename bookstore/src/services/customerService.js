import axios from "axios";
export default class CustomerService {
  add() {}

  update() {}

  delete() {}

  getById() {}

  getAll() {
    return axios.get("http://localhost:8080/api/customers/getAll");
  }
  countGetAll() {
    return axios.get("http://localhost:8080/api/customers/countGetAll");
  }
}
