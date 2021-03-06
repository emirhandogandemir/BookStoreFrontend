import axios from "axios";

class UserService {
  login(credentials) {
    return axios.post("http://localhost:8080/api/auth/login", credentials);
  }

  register(user) {
    return axios.post("http://localhost:8080/api/auth/register", user);
  }

  getAll() {
    return axios.get("http://localhost:8080/api/users/getAll");
  }
  countGetAll() {
    return axios.get("http://localhost:8080/api/users/countGetAll");
  }

  getByUsername(username) {
    return axios.get(
      "http://localhost:8080/api/users/getByUsername?username=" + username
    );
  }

  getFindTopByOrderByIdDesc() {
    return axios.get("http://localhost:8080/api/users/findTopByOrderByIdDesc");
  }
}

export default new UserService();
