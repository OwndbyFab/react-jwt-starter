import axios from "axios";
import authHeader from "./auth-header";

const API_URL__TEST = "http://localhost:8080/api/test/";
const API_URL = "http://localhost:8080/api/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL__TEST + "all");
  }

  getUserBoard() {
    return axios.get(API_URL__TEST + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL__TEST + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL__TEST + "admin", { headers: authHeader() });
  }

  getAllUser() {
    return axios.get(API_URL + "users/getalluser", { headers: authHeader() });
  }
}

export default new UserService();
