import axios from "axios";
import Cookies from "js-cookie";
const source = axios.CancelToken.source();
const token = Cookies.get("token");

let instance;
instance = axios.create({
  // baseURL: "https://reqres.in/",
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("jwt"),
  },
  cancelToken: source.token,
});
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;

export default instance;
