import axios from "axios";
export default class CustomerService {
  add(values) {
    return axios.post("http://localhost:8080/api/customers/add", values);
  }

  update(values) {
    return axios.post("http://localhost:8080/api/customers/update", values);
  }

  delete(id) {
    return axios.post("http://localhost:8080/api/customers/delete?id=" + id);
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/customers/getById?id=" + id);
  }

  getAll() {
    return axios.get("http://localhost:8080/api/customers/getAll");
  }
  countGetAll() {
    return axios.get("http://localhost:8080/api/customers/countGetAll");
  }
}
