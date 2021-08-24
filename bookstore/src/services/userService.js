import axios from "axios";

class UserService {
  login(credentials) {
    return axios.post("http://localhost:8080/api/auth/login", credentials);
  }

  register(user) {
    return axios.post("http://localhost:8080/api/auth/register", user);
  }
}

export default new UserService();
