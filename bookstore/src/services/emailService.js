import axios from "axios";

export default class EmailService {
  send(values) {
    return axios.post("http://localhost:8080/api/emails/send", values);
  }
}
